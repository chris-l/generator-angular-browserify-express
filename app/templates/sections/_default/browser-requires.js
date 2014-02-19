/* jslint node: true */
'use strict';
var fs            = require('fs');

module.exports = function () {
  var requires = [];
  fs.readdirSync('./sections/').forEach(function (file) {
    var fullpath    = './sections/' + file,
        isDirectory = fs.lstatSync(fullpath).isDirectory();
    if (isDirectory && file !== '_default') {
      var dir = file;
      fs.readdirSync('./sections/' + dir).forEach(function (file) {
        if (/.*\.browser.js$/.test(file)) {
          requires.push('injector.invoke(require(\'../' + dir + '/' + file + '\'));');
        }
      });
    }
  });
  return requires.join('');
};
