app.service('teaService', ['$http', function ($http) {
  var cart = [];

  return {
    getTea: function () {
      return $http.get('../../tea.json');
    },

    addItem: function(tea) {
      cart.push(tea);
      return cart;
    },

    getItems: function () {
      return cart;
    },

    removeItem: function(index) {
      cart.splice(index, 1);
      return cart;
    },

    // orderTotal: function(item) {
    //     var total = 0;
    //     var cart = teaService.getItems();
    //     for (var i = 0; i < cart.length; i++) {
    //       total += (item.quantity * item.price)/100;
    //     }
    //     console.log(total);
    //     return total;
    // }

    // toggleEdit: function () {
    //   editQuantity = !editQuantity;
    //   showQuantity = !showQuantity;
    // }
  }

  // return {
  //   editItem: function (tea) {
  //
  //   }
  // }

  // if
}]);
