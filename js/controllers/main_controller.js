app.controller('MainController', ['$scope', 'teaService', function ($scope, teaService) {
  $scope.buttonValue = 'Empty';
  console.log('Getting this!');
  teaService.getTea().then(function (data) {
    $scope.teas = data.data;
    console.log($scope.teas);
  })

}]);
