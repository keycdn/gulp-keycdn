// Example configuration

var gulp = require('gulp'),
    keycdn = require('gulp-keycdn');

// purge zone cache
gulp.task('purgeZone', function() {
    var options = {
        apiKey  : 'your_api_key',
		zoneId  : 'zone_id',
		method : 'get'
	};

    keycdn(options, {});
});

// purge URL
gulp.task('purgeURL', function() {
    var options = {
        apiKey  : 'your_api_key',
		zoneId  : 'zone_id',
		method : 'del'
	};

    var files = {
        urls: [ 'demo-1.kxcdn.com/lorem.css', 'demo-1.kxcdn.com/lorem.jpg' ]
    };

    keycdn(options, files);
});

// Default task
gulp.task('default', ['purgeZone'], function() {
});
