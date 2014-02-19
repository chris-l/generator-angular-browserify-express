/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('angular-browserify-express generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('angular-browserify-express:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'sections/_default/angular-app.js',
      'sections/_default/browser-requires.js',
      'sections/_default/index.jade',
      'sections/_default/layout.jade',
      'sections/view1/partial1.jade',
      'sections/view1/index.js',
      'sections/view1/view1.browser.js',
      'sections/index.js',
      'index.js',
      '.gitignore',
      'Gruntfile.js',
      'package.json',
      'bower.json',
      '.editorconfig',
    ];

    helpers.mockPrompt(this.app, {
      'components': [ 'ui-bootstrap' ]
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
