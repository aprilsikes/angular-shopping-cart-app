var app = angular.module('april', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'MainController'
      })
      .when('/hello', {
        templateUrl: 'partials/hello.html',
        controller: 'HelloController'
      })
});
