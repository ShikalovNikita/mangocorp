var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch',[
	'copy:watch',
	'nunjucks:watch',
	'list-pages:watch',
	'sass:watch',
	'babel:watch'
]);