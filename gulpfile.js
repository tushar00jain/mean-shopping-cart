var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
  return gulp.
    src('./shop/index.js').
    pipe(browserify()).
    pipe(gulp.dest('./shop/bin'));
});

gulp.task('watch', function() {
  gulp.watch(['./shop/*.js'], ['browserify']);
});
