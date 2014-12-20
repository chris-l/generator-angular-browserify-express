# generator-angular-browserify-express [![Build Status](https://secure.travis-ci.org/chris-l/generator-angular-browserify-express.png?branch=master)](https://travis-ci.org/chris-l/generator-angular-browserify-express)

This a yeoman generator that will create the boilerplate for a AngularJS/Browserify/Express app out of the box.

It provides AngularJS 1.3 and Express 4.5.

It uses [grunt](http://gruntjs.com) as the task runner. It also allows to use [jslint](http://www.jslint.com) or [jshint](http://jshint.com).

By executing `grunt dev`, instead of just `grunt`, you can have [source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/).

## About the folder structure

One of the most relevant parts of this generator is the structure of the folders.

The structure of the app files is based on functionality; that is, the browser JavaScript code, the node.js code and the template code FOR EACH functionality of the app will be contained on its OWN directory, inside the `sections/` directory.

Every file that end with `.browser.js` automatically will be processed by browserify and be executed with the [di](https://github.com/vojtajina/node-di) injector.

The variables passed by `di` are:
* `angular` : It is the angular global, in order to avoid using globals on the modules.
* `app` : The app that generator automatically creates is called just `app`.t

By using this, you can create a file called something like `sections/viewSomething/ctrl.browser.js`, which contains something similar to this:

```
function someCtrl() { /* whatever */ }

modules.export = function(app) {
  app.config(function ($routeProvider) {
      $routeProvider.when('/someRoute', { controller : someCtrl, templateUrl : '/html/view1/partial1.html');
  });
};
```

This is an early release, and is still missing documentation. Oh and please report any issues!

## Installation

Install: `npm install -g generator-angular-browserify-express`

Create a new directory and enter inside of it:
```
mkdir some-app && cd some-app
```

Run the generator: 
```
yo angular-browserify-express
```


## License

MIT
