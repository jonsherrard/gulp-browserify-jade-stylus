var stylus     = require('gulp-stylus');
var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var handleErrors = require('../util/handleErrors');
var nib        = require('nib');

gulp.task('concat-css', ['stylus'], function() {
  return gulp.src([
    './css/normalize.css',
    './css/bootstrap.css',
    './css/main.css'
  ])
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('stylus', function() {
  return gulp.src('./src/stylus/main.styl')
    .pipe(stylus({
      use: nib()
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('./css'));
});
