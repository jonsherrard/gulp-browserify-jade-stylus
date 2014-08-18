var browserify   = require('browserify');
var hbsfy        = require('hbsfy');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var livereload   = require('gulp-livereload');

gulp.task('browserify', function(){
  return browserify({
      transform: [hbsfy],
      entries: ['./src/scripts/app.coffee'],
      extensions: ['.coffee', '.js', '.hbs', '.html']
    })
    .bundle({debug: true})
    .on('error', handleErrors)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./js/'))
    .pipe(livereload());
});
