var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-keycdn';

// Main function
function gulpKeyCDN(options, files) {

  if (!options.apiKey) {
    throw new PluginError(PLUGIN_NAME, gutil.colors.red('options.apiKey not defined'));
  }

  if (!options.zoneId) {
    throw new PluginError(PLUGIN_NAME, gutil.colors.red('options.zoneId not defined'));
  }

  var KeyCDN = require('keycdn');
  var keycdn = new KeyCDN(options.apiKey);

  if (options.method === 'del') {
      if (!files) {
        throw new PluginError(PLUGIN_NAME, gutil.colors.red('files not defined'));
      }

      var urls = [];

      gutil.log(PLUGIN_NAME, 'Purging URLs...');

      keycdn.del('zones/purgeurl/' + options.zoneId + '.json', files, function (err, res) {
          if (err) {
            gutil.log(PLUGIN_NAME, gutil.colors.red(err));
            return;
          }

          gutil.log(PLUGIN_NAME, gutil.colors.green(res.description));
      });

  } else if (options.method === 'get') {

      gutil.log(PLUGIN_NAME, 'Purging Zone Cache...');

      keycdn.get('zones/purge/' + options.zoneId + '.json', function (err, res) {
          if (err) {
            gutil.log(PLUGIN_NAME, gutil.colors.red(err));
            return;
          }

          gutil.log(PLUGIN_NAME, gutil.colors.green(res.description));
      });

  }

};

// Exporting the plugin main function
module.exports = gulpKeyCDN;
