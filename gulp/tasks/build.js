var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	config = require('../config');

function build(cb) {
	runSequence(
		'clean',
		'sass',
		'nunjucks',
		'copy',
		'list-pages',
		'babel',
		cb
	);
}

gulp.task('build', function(cb){
	config.setEnv('production');
	config.logEnv();
	build(cb);
});

gulp.task('build:dev', function(cb){
	config.setEnv('development');
	config.logEnv();
	build(cb);
})