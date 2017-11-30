var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	config = require('../config');

gulp.task('default', function(cb) {
	runSequence(
		'build:dev',
		'watch',
		'server',
		cb
	);
});