# generator-angular-browserify-express [![Build Status](https://secure.travis-ci.org/chris-l/generator-angular-browserify-express.png?branch=master)](https://travis-ci.org/chris-l/generator-angular-browserify-express)

This a yeoman generator that will create the boilerplate for a AngularJS/Browserify/Express app out of the box.

## Folder structure

The structure of the app files will be based on functionality; that is, the browser code, the node.js code and the template code FOR EACH functionality of the app will be contained on its OWN directory, inside the `sections/` directory.

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
