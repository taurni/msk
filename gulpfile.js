//imports
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var bs = require('browser-sync').create();
var through = require('through2');
var merge = require('merge-stream');

//constants
var $ = gulpLoadPlugins();
var RELOAD = bs.reload;

//variables
var src = {
    //scss: 'app/scss/*.scss',
    //css:  'app/css',
    html:   'app/**/*.html',
    marko:  'app/**/*.marko',
    markoWatch: ['app/**/*.marko','app/**/renderer.js','app/**/marko-tag.json']
};
var dir ={
    app:            "./app",
    browserSync:    "./app",
    marko:          "./app"
};


gulp.task('serve', ['marko'], function(){
    bs.init({
        server: {
            baseDir: dir.browserSync
        }
    });
    /* kui vaja html reloadi siis peab välistam marko.html reloadi
    *  gulp.watch(src.html).on('change', RELOAD);
    */
    gulp.watch(src.markoWatch, ['marko']);
});

gulp.task('watcher',['marko'],function(){
    gulp.watch(src.markoWatch, ['marko']);
});



/** Marko hotreloader for auto combileing
 *  https://gitter.im/marko-js/marko/archives/2015/10/22
 *  ---------------------------------------------------- *
**/
require('marko/hot-reload').enable();
require('marko/node-require').install();
gulp.task('marko',function(){

    var reload = gulp.src(src.marko)
        //.pipe($.cached('marko-reload'))
        .pipe(through.obj(function (file, enc, cb) {
            require('marko/hot-reload').handleFileModified(file.path);
            cb(null, file);
        }));

    var build = gulp.src(src.marko)
        //.pipe($.cached('marko'))
        .pipe($.marko({
            renderParams: {
                title: 'Hello Marko'
            }
        }))
        .pipe(gulp.dest(dir.marko));

    return merge(reload,build).on('end', RELOAD);
});
