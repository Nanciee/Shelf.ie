var parser = document.createElement('a');

var store = angular.module('store-front.store', []);

store.controller('storeController', function ($scope, requests, $location) {
  $scope.data = {}
  parser.href = $location.absUrl();
  var url = parser.pathname
  requests.getInfo(url).then(function(info){
    console.log(info[0])
    info[0].forEach(function(item, index){
      if(item.title.length > 25){
        info[0][index].title = item.title.slice(0, 22) + "...";
      }
    })
    $scope.data = info[0]
    $scope.info = info[1]
  });
});
