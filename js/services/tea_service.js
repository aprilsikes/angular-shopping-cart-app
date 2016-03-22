app.service('teaService', ['$http', function ($http) {
  var cart = [];

  return {
    getTea: function () {
      return $http.get('../../tea.json');
    },

    addItem: function(tea, qty) {
      qty == undefined ? tea.quantity = 1 : tea.quantity = Number(qty)
      cart.push(tea, qty);
      return cart;
    },

    getItems: function () {
      return cart;
    },

    removeItem: function(item) {
      cart.splice(item, 1);
    },

    orderTotal: function(item) {
        var total = 0;
        var array = this.getItems();
        for (var i = 0; i < array.length; i++) {
          total += (array[i].quantity * array[i].price)/100;
        }
        return '$'+total.toFixed(2);
    }

  }

}]);
