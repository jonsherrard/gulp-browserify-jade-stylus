var gulp         = require('gulp');
var jade         = require('gulp-jade');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var livereload = require('gulp-livereload');

gulp.task('jade', function() {
  return gulp.src('./src/jade/page/index.jade')
    .pipe(jade({
      locals: require('../../config.json'),
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});
