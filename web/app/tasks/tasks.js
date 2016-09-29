var Tasks = {
    gulp: require('gulp'),
    plugins: require('gulp-load-plugins')(),
    getTask: function (path, task)
    {
        return require(`./${path}/gulp${task}.js`)(this.gulp, this.plugins);
    }
}

module.exports = Tasks;