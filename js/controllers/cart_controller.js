app.controller('CartController', ['$scope', 'teaService', function ($scope, teaService) {
  console.log('Getting this');
  $scope.cart = teaService.addItem();
  console.log($scope.cart);

}]);
