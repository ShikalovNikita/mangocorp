var gulp = require('gulp'),
	server = require('browser-sync').create(),
	util   = require('gulp-util'),
	config = require('../config');

gulp.task('server',function() {
	setTimeout(function(){
	server.init({
		server: {
			baseDir: !config.production ? [config.dest.root, config.src.root] : config.dest.root,
			directory: false,
			serveStaticOptions : {
				extensions: ['html']
			}
		},
		files: [
			config.dest.html + '/*.html',
			config.dest.css + '/*.css',
			config.dest.img + '/**/*',
			'build/js/build.js'
		],
		port: util.env.port || 8080,
		logLevel: 'info', // 'debug','info','silent','warn'
		logConnections: false,
		logFileChanges: true,
		open: Boolean(util.env.open),
		notify: false,
		ghostMode: false,
		online: Boolean(util.env.tunnel),
		tunnel: util.env.tunnel || null
	});
	}, 2000);
});

module.exports = server;