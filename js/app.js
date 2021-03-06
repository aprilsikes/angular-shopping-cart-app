var app = angular.module('april', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      .when('/cart', {
        templateUrl: 'partials/cart.html',
        controller: 'CartController'
      })
});
