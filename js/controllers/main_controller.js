app.controller('MainController', ['$scope', 'teaService', function ($scope, teaService) {
  console.log('Getting this!');
  teaService.getTea().then(function (data) {
    $scope.teas = data.data;
    console.log($scope.teas);
  })

}]);
