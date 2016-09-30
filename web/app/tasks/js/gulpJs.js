//Carrega as tarefas
module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('./app/assets/js/**/*.js')
            .pipe(plugins.concat('script.min.js'))
            .pipe(plugins.uglify())
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest('./assets/js'));
    };
};