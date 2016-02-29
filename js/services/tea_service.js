app.service('teaService', ['$http', function ($http) {
  var cart = [];

  return {
    getTea: function () {
      return $http.get('../../tea.json');
        // var teas = data.data;
        // console.log(teas);
        // return teas;
    },

    addItem: function (tea) {
      cart.push(tea);
      return cart;
    },

    removeItem: function(index) {
      return cart.splice(index, 1);
    },
    
    toggleEdit: function () {
      editQuantity = !editQuantity;
      showQuantity = !showQuantity;
    }
  }



  // return {
  //   editItem: function (tea) {
  //
  //   }
  // }






  // if
}]);
