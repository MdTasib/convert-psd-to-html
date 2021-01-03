// require ( npm install ) files
let gulp = require('gulp'),
    postCss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    nested = require('postcss-nested'),
    simpleVars = require('postcss-simple-vars'),
    mixins = require('postcss-mixins'),
    prettify = require('postcss-prettify'),
    cssImport = require('postcss-import'),
    browserSync = require('browser-sync').create(),
    filters = [
        cssImport,
        simpleVars,
        mixins,
        autoprefixer(),
        nested,
        prettify
    ]

// gulp task starts here
gulp.task( 'watch', () => {
    // track on browser auto reloading
    browserSync.init({
        server: {
            baseDir: './app/'
        }
    })

    // track on ( html ) changes here
    gulp.watch('./app/*.html').on('change', () => {
        browserSync.reload();
    })

    // track on ( css ) changes here
    gulp.watch('./app/assets/css/**/*.css', () => {
        return gulp.src('./app/assets/css/styles.css')
        .pipe( postCss( filters ) )
        .pipe( gulp.dest('./app/temp/') )
        .pipe(browserSync.stream())
    })

    // track on ( js ) changes here
    gulp.watch('./app/assets/js/**/*.js').on('change', () => {
        browserSync.reload()
    })
} )