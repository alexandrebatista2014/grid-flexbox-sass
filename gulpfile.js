const gulp         = require('gulp');
const browserSync  = require('browser-sync').create();
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: "./src"
  });
  gulp.watch("src/scss/*.scss", css);
  gulp.watch('src/*.html').on('change', browserSync.reload);
}

exports.css = css;
exports.watch = watch;
exports.default = gulp.series(css,watch);