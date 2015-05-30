var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    jade = require('gulp-jade'),
    cssmin = require('gulp-minify-css'),
    sass = require('gulp-sass');


gulp.task('default', ['templates', 'css', 'scripts', 'watch']);

gulp.task('templates', function(){
    gulp.src('./site/views/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('./public/'))
        .pipe(livereload());
});

gulp.task('css', function(){
    gulp.src('./site/css/*.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('scripts', function(){
    gulp.src('./site/scripts/*.js')
        .pipe(concat('site.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/scripts'))
        .pipe(livereload());
});

gulp.task('watch', ['css', 'templates'], function(){
    livereload.listen();
    gulp.watch('./site/views/**/*.jade', ['templates']);
    gulp.watch('./site/css/**/*.scss', ['css']);
    gulp.watch('./site/scripts/**/*.js', ['scripts']);
});
