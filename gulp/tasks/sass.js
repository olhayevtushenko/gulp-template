var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csso = require('postcss-csso');
var config = require('../config');
 
gulp.task('sass', function() {
  return gulp.src(config.src.sass + '/**/*.{sass,scss}')
  	.pipe(sourcemaps.init())
  	.pipe(sass())
  	.pipe(postcss([ 
  		autoprefixer({
  			browsers: ['last 4 versions'],
        	cascade: false
  		}),
  		csso
  	]))
  	.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.build.css));
});
 
gulp.task('sass:watch', function() {
  gulp.watch(config.src.sass + '/**/*.{sass,scss}', ['sass']);
});