'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var AngularBrowserifyExpressGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.npmInstall();
        this.bowerInstall();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('I will install you the base for an angular-browserify-express app!'));

    var prompts = [
      { type: 'checkbox',
        name: 'components',
        message: 'Select which components you want to use:',
        choices: [ 'ui-bootstrap', 'less' ],
        default: [ 'ui-bootstrap' ]
      }
    ];

    this.prompt(prompts, function (props) {
      var has = function (o, mod) { return o.indexOf(mod) !== -1; };
      this.includeAngularBootstrap = has(props.components, 'ui-bootstrap');
      this.includeLess = has(props.components, 'less');

      done();
    }.bind(this));
  },


  app: function () {
    this.mkdir('sections');
    this.mkdir('sections/_default');
    this.mkdir('sections/view1');
    this.mkdir('static/');

    this.copy('sections/_default/_angular-app.js', 'sections/_default/angular-app.js');
    this.copy('sections/_default/browser-requires.js', 'sections/_default/browser-requires.js');
    this.copy('sections/_default/index.jade', 'sections/_default/index.jade');
    this.copy('sections/_default/_layout.jade', 'sections/_default/layout.jade');
    this.copy('sections/view1/partial1.jade', 'sections/view1/partial1.jade');
    this.copy('sections/view1/index.js', 'sections/view1/index.js');
    this.copy('sections/view1/browser.js', 'sections/view1/browser.js');
    this.copy('sections/index.js', 'sections/index.js');
    this.copy('.editorconfig', '.editorconfig');
    this.copy('_index.js', 'index.js');
    this.copy('gitignore', '.gitignore');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  css : function () {
    if (this.includeLess) {
      this.mkdir('sections/_default/less');
      this.copy('app.css', 'sections/_default/less/app.less');
    } else {
      this.mkdir('static/css');
      this.copy('app.css', 'static/css/app.css');
    }
  }

});

module.exports = AngularBrowserifyExpressGenerator;
