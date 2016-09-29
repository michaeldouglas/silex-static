'use strict';
var gulp = require('gulp');
var tasks = require('./app/tasks/tasks');

// Tarefas variadas do nosso projeto
gulp.task('sass', tasks.getTask('sass', 'Sass'));


// Tarefa default
gulp.task('default', ['sass'], function () {
    gulp.watch('./assets/src/**/*.{sass,scss}', ['sass']);
});
