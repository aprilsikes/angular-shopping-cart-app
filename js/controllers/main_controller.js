app.controller('MainController', ['$scope', 'teaService', function ($scope, teaService) {
  $scope.buttonValue = 'Empty!';

  teaService.getTea().then(function (data) {
    $scope.teas = data.data;
  })

  $scope.addItem = function (tea) {
    teaService.addItem(tea);
    $scope.buttonValue = '('+teaService.getItems().length+')'
  }

  $scope.getItems = function () {
    teaService.getItems();
  }


}]);
