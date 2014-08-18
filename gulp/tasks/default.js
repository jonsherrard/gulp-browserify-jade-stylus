var gulp = require('gulp');

gulp.task('default', ['browserify', 'concat-css', 'jade','templates', 'watch', 'serve']);
