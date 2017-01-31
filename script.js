var app = angular.module('app', ['appControllers']);

appControllers = angular.module('appControllers', []);

appControllers.controller('appCtrl', function($scope, $q, $timeout) {

  $scope.test1 = "";
  $scope.test2 = "asdasdasd";
  $scope.test3 = "";

  var arr = ["12q3", "asdasd", "213", "jgjg", "89758"];
  var callsArray = [];
  var callsArray2 = [];




  init();

  function init() {
    callsArray = arr.map(function(ar) {
      return prom(ar).then(function(result) {
        var bla = hghghg(result);
        callsArray2.push(bla);
      });
    });

    $q.all(callsArray).then(function(values) {
      console.log(values);
      console.log(blaa);
    });
  }


  function prom(text) {

    return $timeout(function() {
      return text;
    }, 2000);

  }

  function prom(text) {

    return $timeout(function() {
      return text;
    }, 2000);

  }

  function prom(text) {

    return $timeout(function() {
      return text;
    }, 2000);

  }

  function prom2(text) {

    return $timeout(function() {
      return text;
    }, 3000);

  }
});
