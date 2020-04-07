"use strict";

var gulp = require("gulp"); //Подключаем Gulp
var less = require("gulp-less"); //подключаем Less
var plumber = require("gulp-plumber"); //не даем тихо умереть плагину
var postcss = require("gulp-postcss");
var csscomb = require("gulp-csscomb");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var del = require("del");
var gulpCopy = require("gulp-copy");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat"); // Подключаем gulp-concat (для конкатенации файлов)
var server = require("browser-sync").create();

gulp.task("style", async function () {
    gulp.src("source/less/style.less")
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([
            autoprefixer({overrideBrowserslist: ["last 15 version", "> 1%", 'ie 8', 'ie 7']}),
            mqpacker({sort: true})
        ]))
        .pipe(csscomb())
        .pipe(gulp.dest("source/css"))
        .pipe(minify())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("build/source/css"))
        .pipe(server.stream());
});

gulp.task("images", function () {
    return gulp.src("build/source/img/**/*.{png,jpg,gif,svg}")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.jpegtran({progressive: true})
        ]))
        .pipe(gulp.dest("build/source/img"));
});

gulp.task("serve", function () {
    server.init({
        server: "build/source",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("source/less/**/*.less", gulp.parallel("style"));
    gulp.watch("source/*.html", gulp.parallel("gulpCopy")).on("change", server.reload);
    gulp.watch("source/js/**/*.js", gulp.parallel("minjs")).on("change", server.reload); // Наблюдение за JS файлами в папке js
    gulp.watch("source/img/**/*.{png,jpg,gif,svg}", gulp.series("clean", "copy", "style", "images", "minjs", "jslibs")).on("change", server.reload);
    // gulp.watch("source/img/**/*.{png,jpg,gif,svg}", gulp.parallel("images"));
    gulp.watch("source/libs/**/*.js", gulp.parallel("jslibs")).on("change", server.reload);
});

gulp.task("jslibs", function () {
    return gulp.src([ // Берем все необходимые библиотеки
        'source/libs/jquery211.js', // Берем jQuery
        'source/libs/modernizr.js', // Берем Modernizr
        'source/libs/OwlCarousel2-2.3.4/dist/owl.carousel.js',
        'source/libs/maindoposle.js',
        'source/libs/jquery.flexslider-min.js',
        'source/libs/jquery.mobile.custom.min.js',
        'source/libs/inputmask.js'
    ])
        .pipe(concat("libs.min.js")) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest("build/source/libs")); // Выгружаем в папку build/libs
});

gulp.task("gulpCopy", function () {
    return gulp.src([
            "source/*html"
            ],
        {base: "."})
        .pipe(gulp.dest("build"));
});

gulp.task("minjs", function () {
    return gulp.src([
        'source/js/nav-bar.js',
        'source/js/script_ft.js',
        'source/js/owl.js',
        'source/js/main.js',
        'source/js/main1.js',
        'source/js/footer-reveal.min.js',
        'source/js/preloader.js',
        'source/js/accordion.js',
        'source/js/plus-minus-form.js',
        'source/js/calculator-wash.js',
        'source/js/script_hd.js',
        'source/js/telmask.js',
        'source/js/buy-btn.js',
        'source/js/hide-header.js',
        'source/js/calc-carpet.js',
        'source/js/tabs.js'
    ])// Берем все необходимые js файлы(перечисляем их)
        .pipe(concat("minjs.js")) // Собираем их в кучу в новом файле minjs.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest("build/source/js")); // Выгружаем в папку build/libs
});

gulp.task("copy", function () {
    return gulp.src([
            "source/fonts/**/*.{woff,woff2}",
            "source/img/**",
            "source/js/minjs.js",
            "source/libs/**",
            "source/css/normalize.css",
            "source/css/animate.css",
            "source/*html",
            "source/*php",
            "source/favicon.png",
            "source/*pdf",
            "source/css/main.css",
            "source/css/otziv.css",
            "source/css/reset.css",
            "source/css/rwdgrid.css",
            "source/css/bootstrap-grid.min.css",
            "source/video/**"
            ],
        {base: "."})
        .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
    return del("build");
});

gulp.task("build", gulp.series("clean", "copy", "style", "images", "minjs", "jslibs"));