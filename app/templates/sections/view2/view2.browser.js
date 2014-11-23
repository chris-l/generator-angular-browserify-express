/* jslint node: true */
'use strict';

/*jslint unparam:true*/
function ctrl($scope, $http) {
  return;
}
/*jslint unparam:false*/

module.exports = function (app) {
  app.config(function ($routeProvider) {
    $routeProvider.when('/view2', { controller : ctrl, templateUrl : '/html/view2/view.html' });
  });
};
