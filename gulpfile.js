const { src, dest, task, series } = require("gulp");
const imagemin = require("gulp-imagemin");
const cleancss = require("gulp-clean-css");
const javascript = require("gulp-uglify");

function minifyImages() {
  return src(["./images/**/*"])
    .pipe(imagemin())
    .pipe(dest("dist/images"));
}

function minifyCss() {
  return src(["css/**/*.css"])
    .pipe(cleancss())
    .pipe(dest("dist/css"));
}

function minifyJS() {
  return src(["js/**/*.js"])
    .pipe(javascript())
    .pipe(dest("dist/js"));
}

exports.minifyCss = minifyCss;
exports.minifyImages = minifyImages;
exports.minifyJS = minifyJS;

task("start", series(minifyCss, minifyImages, minifyJS));
