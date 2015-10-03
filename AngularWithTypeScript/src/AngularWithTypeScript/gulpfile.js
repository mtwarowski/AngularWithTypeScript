
var gulp = require('gulp'),
    tsc = require("gulp-typescript"),
    watch = require('gulp-watch'),
    del = require("del"),
    uglify = require('gulp-uglify')
    project = require("./project.json");


var paths = {
    webroot: "./" + project.webroot + "/",
    scripts: "./" + project.webroot + "/scripts/",
    ts: './webApp/ts/**/*.ts',
    tslib: "./webApp/tslib/"
};

gulp.task('ts:build', function () {
    gulp.src([paths.ts])
    .pipe(tsc().js)
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts));
});

gulp.task('ts:clean', function () {
    del([paths.scripts]);
});

gulp.task('watch', function () {
    gulp.watch(paths.ts, ['ts:clean', 'ts:build']);
});


gulp.task('default', function () {
    // place code for your default task here
});