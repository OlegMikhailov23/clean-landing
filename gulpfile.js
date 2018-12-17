var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var cssnano = require('gulp-cssnano'); // Подключаем пакет для минификации CSS
var rename = require('gulp-rename'); // Подключаем библиотеку для переименования файлов
var autoprefixer = require('gulp-autoprefixer');
var del = require('del'); // Подключаем библиотеку для удаления файлов и папок
var imagemin = require('gulp-imagemin'); // Подключаем библиотеку для работы с изображениями
var pngquant = require('imagemin-pngquant'); // Подключаем библиотеку для работы с png
var cache = require('gulp-cache'); // Подключаем библиотеку кеширования
var mqpacker = require('css-mqpacker');
var concat = require('gulp-concat'); // Подключаем gulp-concat (для конкатенации файлов)
var uglify = require('gulp-uglify');
var server = require('browser-sync').create();

gulp.task('style', function() {
    return gulp.src('source/less/style.less') // Берем style.less и преобразуем его в css
        .pipe(plumber())
        .pipe(less())
        .pipe(
            autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
                cascade: true
            }),
            mqpacker({
                sort: true
            }))
        .pipe(gulp.dest('source/css'))
        .pipe(server.stream()) // Обновляем CSS на странице при изменении
        .pipe(cssnano())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('source/css'))
});

gulp.task('serve', function() {
    server.init({
        server: 'source',
        notify: false,
        open: true,
        cors: true,
        ui: false
    });
});

gulp.task('jslibs', function() {
    return gulp.src([ // Берем все необходимые библиотеки
        'source/libs/jquery211.js', // Берем jQuery
        'source/libs/modernizr.js', // Берем Modernizr
				'source/libs/OwlCarousel2-2.3.4/dist/owl.carousel.js',
				'source/libs/maindoposle.js',
				'source/libs/jquery.flexslider-min.js',
				'source/libs/jquery.mobile.custom.min.js'
        ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('source/libs')); // Выгружаем в папку source/libs
});

gulp.task('minjs', function() {
    return gulp.src([
			'source/js/nav-bar.js',
			'source/js/script_ft.js',
			'source/js/owl.js',
			'source/js/main.js',
			'source/js/main1.js',
			'source/js/footer-reveal.min.js'
		])// Берем все необходимые js файлы
        .pipe(concat('minjs.js')) // Собираем их в кучу в новом файле minjs.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('source/js')); // Выгружаем в папку source/libs
});

gulp.task('watch', ['serve', 'style', 'jslibs', 'minjs'], function() {
    gulp.watch('source/less/**/*.less', ['style']); // Наблюдение за less файлами
    // Наблюдение за другими типами файлов
    gulp.watch('source/*.html', server.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('source/js/**/*.js', server.reload); // Наблюдение за JS файлами в папке js
		gulp.watch('source/libs/**/*.js', server.reload); // Наблюдение за JS файлами в папке libs
});


gulp.task('clean', function() {
    return del.sync('build'); // Удаляем папку dist перед сборкой
});

gulp.task("img", function() {
  return gulp.src("source/img/**/*.{png,jpg,gif,svg}")
    .pipe(cache(imagemin([
        imagemin.optipng({optimizationLevel: 7}),
        imagemin.jpegtran({progressive: true})
    ])))
    .pipe(gulp.dest("build/img"));
}); 

gulp.task('build', ['clean', 'img', 'style', 'jslibs', 'minjs'], function() {

    var buildCss = gulp.src([ // Переносим CSS стили в продакшен
            'source/css/*.css',

        ])
        .pipe(gulp.dest('build/css'))

    var buildFonts = gulp.src('source/fonts/**/*') // Переносим шрифты в продакшен
        .pipe(gulp.dest('build/fonts'))

    var buildJs = gulp.src('source/js/**/*') // Переносим скрипты в продакшен
        .pipe(gulp.dest('build/js'))

    var buildHtml = gulp.src('source/*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('build'));

    var buildPhp = gulp.src('source/*.php') // Файлы PHP
        .pipe(gulp.dest('build'));

    var buildFavicon = gulp.src('source/favicon.png') // Иконка сайта
        .pipe(gulp.dest('build'));

    var buildPdf = gulp.src('source/*.pdf') // Иконка сайта
        .pipe(gulp.dest('build'));

    var buildLibs = gulp.src('source/libs/**/*') // Библиотеки
        .pipe(gulp.dest('build/libs'));
});

gulp.task('clear', function() {
    return cache.clearAll();
})

gulp.task('default', ['watch']);