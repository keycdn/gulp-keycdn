# gulp-keycdn

Gulp plugin to interact with the KeyCDN API.

## Usage

~~~js
var gulp = require('gulp'),
    keycdn = require('gulp-keycdn');
~~~

### Purge Zone Cache

~~~js
gulp.task('purgeZone', function() {
    var options = {
		apiKey  : 'your_api_key',
		zoneId  : 'zone_id',
		method : 'get'
	};

    keycdn(options, {});
});
~~~

### Purge Selected URLs

~~~js
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
~~~


For more details visit https://www.keycdn.com
