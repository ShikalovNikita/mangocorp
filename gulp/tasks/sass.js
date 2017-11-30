var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	sourcemaps   = require('gulp-sourcemaps'),
	postcss      = require('gulp-postcss'),
	mqpacker     = require('css-mqpacker'),
	autoprefixer = require('autoprefixer'),
	config       = require('../config'),
	csso 		 = require('postcss-csso');

var procrssors = [
	autoprefixer({
		browsers: ['last 4 versions'],
		cascade: false
	}),
	require('lost'),
	mqpacker({
		sort: sortMediaQueries
	}),
	csso
]

gulp.task('sass', function(){
	return gulp.src(config.src.sass + '/*.{sass,scss}')
		.pipe(sourcemaps.init())
		.pipe(sass({
			ouputStyle: config.production ? 'compact' : 'expanded', // nested, expanded, compact, compressed
			precision: 5
		}))
		.on('error', config.errorHandler)
		.pipe(postcss(procrssors))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.dest.css));
});

gulp.task('sass:watch', function() {
	gulp.watch(config.src.sass + '/**/*.{sass,scss}', ['sass']);
});

function isMax(mq){
	return /max-width/.test(mq);
}
function isMin(mq){
	return /min-width/.test(mq);
}
function sortMediaQueries(a, b) {
	A = a.replace(/\D/g,'');
	B = b.replace(/\D/g,'');

	if(isMax(a) && isMax(b)) {
		return B - A;
	} else if(isMin(a) && isMin(b)) {
		return A - B;
	} else if(isMax(a) && isMin(b)) {
		return 1;
	} else if(isMin(a) && isMax(b)) {
		return -1;
	}
	return 1;
}