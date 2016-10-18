var parser = document.createElement('a');

var store = angular.module('store-front.store', []);

store.controller('storeController', function ($scope, requests, $location) {
  $scope.data = {}
  parser.href = $location.absUrl();
  var url = parser.pathname
  requests.getInfo(url).then(function(info){
    console.log(info)
    $scope.data = info
  });
});
