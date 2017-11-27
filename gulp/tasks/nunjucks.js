var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var frontMatter = require('gulp-front-matter');
var prettify = require('gulp-prettify');
var config = require('../config');
 
gulp.task('nunjucks', function() {
  return gulp.src([config.src.root + '/**/[^_]*.html'])
  	.pipe(frontMatter({ property: 'data' }))
    .pipe(nunjucksRender({
      path: [config.src.root + '/']
    }))
    .pipe(prettify({
      indent_size: 2,
      wrap_attributes: 'auto',
      preserve_newlines: false,
      end_with_newline: true
    }))
    .pipe(gulp.dest(config.build.root));
});

gulp.task('nunjucks:watch', function() {
    gulp.watch([
        config.src.root + '/**/*.html'
    ], ['nunjucks']);
});