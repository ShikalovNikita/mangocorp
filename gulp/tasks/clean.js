var gulp = require('gulp'),
	del = require('del'),
	util = require('gulp-util'),
	config = require('../config');

gulp.task('clean', function(cb){
	return del([
		config.dest.root,
	]).then(function(paths){
		util.log('DELETED::', util.colors.magenta(paths.join('\n')));
	})
});

gulp.task('clean_build', function(cb){
	return del([
		config.src.js+'/build.js'
	]).then(function(paths){
		util.log('DELETED::', util.colors.magenta(paths.join('\n')));
	})
})