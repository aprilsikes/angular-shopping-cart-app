app.service('teaService', ['$http', function ($http) {
  var cart = [];

  return {
    getTea: function () {
      return $http.get('../../tea.json');
    },

    addItem: function(tea) {
      // var item = {};
      // item.name = tea.name;
      // item.imageUrl = tea.imageUrl;
      // item.caffeineScale = tea.caffeineScale;
      // item.ingredients = tea.ingredients;
      // item.rating = tea.rating;
      // item.quantity = tea.quantity;
      // item.price = tea.price;
      console.log('Getting this!');
      cart.push(tea);
      console.log(tea);
      console.log(cart);
      return cart;
    },

    getItems: function () {
      console.log(cart);
      return cart;
    },

    removeItem: function(index) {
      cart.splice(index, 1);
      return cart;
    }

    // // displayItem: function () {
    // //   return cart;
    // // }
    //
    // removeItem: function(index) {
    //   return cart.splice(index, 1);
    // },
    //
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
