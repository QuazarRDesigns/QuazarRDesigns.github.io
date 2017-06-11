// Load all the modules from package.json
var gulp = require('gulp'),
        plumber = require('gulp-plumber'),
        watch = require('gulp-watch'),
        livereload = require('gulp-livereload'),
        cleanCSS = require('gulp-clean-css'),
        jshint = require('gulp-jshint'),
        stylish = require('jshint-stylish'),
        rename = require('gulp-rename'),
        include = require('gulp-include'),
        sourcemaps = require('gulp-sourcemaps'),
        sass = require('gulp-sass');


// Default error handler
var onError = function (err) {
    console.log('An error occured:', err.message);
    this.emit('end');
};

// As with javascripts this task creates two files, the regular and
// the minified one. It automatically reloads browser as well.
gulp.task('sass', function () {
    return gulp.src('sass/app.scss')
            .pipe(sourcemaps.init())
            .pipe(plumber({errorHandler: onError}))
            .pipe(sass())
            .pipe(gulp.dest('build/css'))
            // Normal done, time to do minified (style.min.css)
            // remove the following 3 lines if you don't want it
            .pipe(cleanCSS())
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write(''))
            .pipe(gulp.dest('build/css'))
            .pipe(livereload());
});


// Start the livereload server and watch files for change
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('sass/**/*.scss', ['sass']);

    gulp.watch('modules/**/*.html').on('change', function (file) {
// reload browser whenever any HTML file changes
        livereload.changed(file);
    });
});
gulp.task('default', ['watch'], function () {
    // Does nothing in this task, just triggers the dependent 'watch'
});

