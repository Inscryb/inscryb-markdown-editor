'use strict';

var gulp = require('gulp'),
    minifycss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    header = require('gulp-header'),
    buffer = require('vinyl-buffer'),
    pkg = require('./package.json'),
    eslint = require('gulp-eslint'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    rename = require('gulp-rename');

var banner = [
    '/**',
    ' * <%= pkg.name %> v<%= pkg.version %>',
    ' * Copyright <%= pkg.author %>',
    ' * @link <%= pkg.repository.url %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
].join('\n');

// Functions
function lint(cb) {
    gulp.src('./src/js/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
    cb();
}

function scripts(cb) {
    browserify({
        entries: './src/js/inscrybmde.js',
        standalone: 'InscrybMDE'
    })
        .bundle()
        .pipe(source('inscrybmde.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('./dist/'));

    cb();
}

function styles(cb) {
    var css_files = [
        './node_modules/codemirror/lib/codemirror.css',
        './src/css/*.css',
        './node_modules/codemirror-spell-checker/src/css/spell-checker.css'
    ];

    gulp.src(css_files)
        .pipe(concat('inscrybmde.css'))
        .pipe(minifycss())
        .pipe(rename('inscrybmde.min.css'))
        .pipe(buffer())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('./dist/'));

    cb();
}

// Tasks
gulp.task('lint', lint);
gulp.task('scripts', gulp.series(lint, scripts));
gulp.task('styles', styles);
gulp.task('default', gulp.series(lint, scripts, styles));
