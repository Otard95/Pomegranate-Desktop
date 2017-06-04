
var gulp   = require('gulp');
var pug    = require('gulp-pug2');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('pug', function() {
  return gulp.src('./_pug/*.pug')
    .pipe( pug() )
    .pipe( gulp.dest('../') );
});

gulp.task('js', function() {
  return gulp.src('_js/**/*.js')
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('../assets/js'));
});

gulp.task('default', ['pug', 'js'], function() {
  console.log('Compiled!');
});
