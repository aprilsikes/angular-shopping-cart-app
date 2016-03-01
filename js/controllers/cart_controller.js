app.controller('CartController', ['$scope', 'teaService', function ($scope, teaService) {
  console.log('Getting this');
  $scope.getItems = function () {
    // console.log(teaService.getItems());
    var cart = teaService.getItems();
    return cart;
    }


}]);
