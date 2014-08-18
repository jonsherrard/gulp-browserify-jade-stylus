var gulp         = require('gulp');
var jade         = require('gulp-jade');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
var ext = require('gulp-ext-replace');

gulp.task('templates', function() {
  return gulp.src('./src/jade/templates/**/*.jade')
    .pipe(jade({
      locals: require('../../config.json'),
      pretty: true
    }))
    .pipe(ext('.hbs'))
    .pipe(gulp.dest('./src/templates'))
    .pipe(livereload());
});
