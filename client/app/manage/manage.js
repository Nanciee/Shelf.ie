var manage = angular.module('store-front.manage', []);

manage.controller('ManageController', function ($scope, requests) {
  $scope.submit = function(){
    console.log($scope.brand, $scope.url, $scope.amazonUser)
    requests.addInfo()
  }
});

