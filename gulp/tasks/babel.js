var gulp = require("gulp"),
	concat         = require('gulp-concat'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	config = require('../config');

gulp.task('babel', function() {
	var b = browserify({
		entries: config.src.js+'/app.js',
		debug: true,
		transform: [
			babelify.configure({
				presets: [
					'es2015'
				]
			})
		]
	});

	b.bundle()
	.pipe(source(config.src.js+'/app.js'))
	.pipe(buffer())
	.pipe(concat('build.js'))
	.pipe(gulp.dest(config.dest.js))
});

gulp.task('babel:watch', function() {
	gulp.watch(config.src.js + '/app.js', ['babel']);
});