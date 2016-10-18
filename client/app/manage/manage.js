var manage = angular.module('store-front.manage', []);

manage.controller('ManageController', function ($scope, requests) {
  $scope.submit = function(){
    console.log($scope.brand, $scope.url, $scope.amazonUser)
    var info = {
      username: $scope.username,
      brand: $scope.brand,
      url: $scope.url,
      amazonUser: $scope.amazonUser
    }
    requests.addInfo(info)
  }
});

