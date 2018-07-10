var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var px2rem = require('gulp-px2rem-plugin');
gulp.task("sass", function () {
    var data = gulp.src(["./scss/*.scss"])
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(px2rem({'width_design':750,'valid_num':4,'pieces':10,'ignore_px':[1,2,-1,-2]}))
        .pipe(gulp.dest("./css"));
    return data
});

gulp.task("watch", function () {
    gulp.watch(["./scss/*.scss"], ["sass"]);
});