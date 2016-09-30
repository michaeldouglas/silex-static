var Tasks = {
    gulp: require('gulp'),
    plugins: require('gulp-load-plugins')(),
    basePaths: {
        sass: './app/assets/**/*.{sass,scss}',
        js: './app/assets/**/*.js',
        img: './app/assets/*'
    },
    getTask: function (path, task)
    {
        return require(`./${path}/gulp${task}.js`)(this.gulp, this.plugins);
    }
}

module.exports = Tasks;