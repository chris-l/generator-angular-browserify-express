/* jslint node: true */
'use strict';
var fs            = require('fs');

module.exports = function () {
  var requires = [];
  fs.readdirSync('./sections/').forEach(function (file) {
    var fullpath    = './sections/' + file,
        isDirectory = fs.lstatSync(fullpath).isDirectory();
    if (isDirectory && file !== '_default' && fs.existsSync(fullpath + '/browser.js')) {
      requires.push('require(\'../' + file + '/browser.js\')(app);');
    }
  });
  return requires.join('');
};
