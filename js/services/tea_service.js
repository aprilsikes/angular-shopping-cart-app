app.service('teaService', ['$http', function ($http) {
  return {
    getTea: function () {
      return $http.get('../../tea.json');
        // var teas = data.data;
        // console.log(teas);
        // return teas;
    }
  }
}]);
