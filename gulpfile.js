// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var jshint=require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var stylus = require('gulp-stylus');

var paths={
    gulp_js:'public/gulpjs/*.js',
    css:'public/css',
    js:'public/js/',
    stylus:'public/stylus/*.styl',
}

// 检查脚本
gulp.task('jshint', function() {
    gulp.src(paths.gulp_js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/* remove
// 编译Sass
gulp.task('sass', function() {
    gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(paths.css))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(paths.css));
});
*/
gulp.task('stylus', function () {
    return gulp.src(paths.stylus)
        .pipe(stylus())
        .pipe(gulp.dest(paths.css))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(paths.css));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src(paths.gulp_js)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(paths.js))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(paths.js));
});

//监听文件变化
gulp.task('watch',function(){
        gulp.watch(paths.gulpjs, ['scripts']);
        gulp.watch(paths.scss,['sass']);
        gulp.watch(paths.stylus,['stylus']);
});

//default
gulp.task('default',['jshint','scripts','stylus','watch'])