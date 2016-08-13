var app = angular.module('app', ['appControllers']);

appControllers = angular.module('appControllers', []);

appControllers.controller('appCtrl', function($scope, $q, $timeout) {

  $scope.test1 = "";
  $scope.test2 = "";
  $scope.test3 = "";

  var arr = ["12q3", "asdasd", "213", "jgjg", "89758"];
  var callsArray = [];
  var callsArray2 = [];




  init();

  function init() {

    // for (var i = 0; i < 8; i++) {
    //   prom(i).then(function(result) {
    //     console.log(result);
    //     return prom2(result);
    //   }).then(function(result) {
    //     console.log(result);
    //   }).catch(function () {
    //     console.log('error');
    //   });
    // }

    callsArray = arr.map(function(ar) {
      return prom(ar).then(function(result) {
        // console.log(result);
        // prom2(result).then(function(result) {
        //   console.log(result);
        // });

        var bla = prom2(result).then(function(result) {
          if (true) {
            console.log('true');
          } else {
            console.log('false');
          }
          console.log(result);
        });
        callsArray2.push(bla);
        return $q.all(callsArray2).then(function(values) {
          console.log(result);
        });
      });
    });

    $q.all(callsArray).then(function(values) {
      console.log(values);
    });
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
