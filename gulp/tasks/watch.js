var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
  var server = livereload();

  var reload = function(file) {
    server.changed(file.path);
  };

  gulp.watch('src/scripts/**', ['browserify']);
  gulp.watch('src/stylus/**', ['concat-css']);
  gulp.watch('src/jade/**', ['jade']);
  gulp.watch('src/jade/templates/**', ['templates']);
  gulp.watch('src/templates/**', ['browserify']);
});
