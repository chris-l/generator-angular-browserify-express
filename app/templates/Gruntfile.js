/*jslint node: true, indent: 2, nomen:true, stupid:true */
'use strict';
module.exports = function (grunt) {
  var transformify, requires, addRequires;

  transformify = require('transformify');
  requires = require('./sections/_default/browser-requires.js')();


  addRequires = transformify(function (x) {
    return x.replace('/* modules browserify */', requires);
  });
    // Project configuration.
  grunt.initConfig({
    pkg     : grunt.file.readJSON('package.json'),
    jshint  : {
      all     : [ 'Gruntfile.js', 'index.js', 'sections/**/*.js' ]
    },
    browserify: {
      dist: {
        files: {
          'static/js/app.js': ['sections/_default/angular-app.js']
        },
        options: {
          transform: [ addRequires, 'browserify-shim']
        }
      }
    },
    uglify  : {
      target : {
        files : { 'static/js/app.min.js' : 'static/js/app.js' }
      },
      options: {
        mangle: false
      }
    },
    clean : [ 'static/js/app.js' ]
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');


    // Default task(s).
  grunt.registerTask('default', [
    'jshint',
    'browserify',
    'uglify',
    'clean'
  ]);

};

