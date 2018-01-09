var gulp = require('gulp'),
	config = require('../config');

gulp.task('copy:fonts', function(){
	return gulp
		.src(config.src.fonts+'/*.{ttf,eot,woff,woff2}')
		.pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:lib', function(){
	return gulp
		.src(config.src.lib+'/**/*.*')
		.pipe(gulp.dest(config.dest.lib));
});

gulp.task('copy:rootfiles', function(){
	return gulp
		.src(config.src.root+'/*.*')
		.pipe(gulp.dest(config.dest.root));
});

gulp.task('copy:img', function(){
	return gulp
		.src([
			config.src.img+'/**/*.{jpg,png,jpeg,svg,gif}',
			'!' + config.src.img+'/svgo/**/*.*'
		])
		.pipe(gulp.dest(config.dest.img));
});

gulp.task('copy:fontawesome', function(){
	return gulp.src('node_modules/font-awesome/fonts/*.{ttf,eot,woff,woff2}')
	.pipe(gulp.dest(config.dest.fonts));
})
gulp.task('copy', ['copy:img','copy:fonts', 'copy:fontawesome']);
gulp.task('copy:watch', function() {
	gulp.watch(config.src.img+'/*', ['copy']);
})