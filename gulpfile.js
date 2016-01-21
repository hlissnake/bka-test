var gulp = require('gulp');
// var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');

var pkg = require('./package.json');

// building error handler
function onError(err){
  console.log(err);
  this.emit('end');
}

// Sass task
// gulp.task('css', function () {
//   return gulp.src('sass/*.+(scss|sass)')
//     .pipe(sass().on('error', onError))
//     // .pipe(code.lint())       //css lint
//     // .pipe(code.minify())     //css minify
//     .pipe(gulp.dest('build/css'))
// });

gulp.task('angular', function(){
  return gulp.src('node_modules/angular/angular.min.js')
    .pipe(gulp.dest('build/'));
});

// Webpack compile task
gulp.task('pack', ['angular'], function(){
  return gulp.src('js/index.js')
    .pipe(webpack({
      output: {
        filename: 'index.js',
        libraryTarget: 'umd'
      }
    }))
    .on('error', onError)
    // .pipe(uglify())
    .on('error', onError)
    .pipe(gulp.dest('build/'));
})

// Watch task
gulp.task('watch', function(){
  gulp.watch(['js/**/*.js', 'sass/**/*.+(scss|sass)'], ['pack']);
});

// Default task
gulp.task('default', ['pack', 'watch']);