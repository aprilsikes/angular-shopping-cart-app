app.controller('CartController', ['$scope', 'teaService', function ($scope, teaService) {

    $scope.cart = teaService.getItems();
    console.log($scope.cart);
    // $scope.orderTotal = function() {
    //     var total = 0;
    //     for (var i = 0; i < $scope.cart.length; i++) {
    //       total += (item.quantity * item.price)/100;
    //     }
    //     console.log(total);
    //     return total;
    // }

}]);
