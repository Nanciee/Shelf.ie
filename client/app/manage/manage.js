var manage = angular.module('store-front.manage', []);

manage.controller('ManageController', function ($scope, requests, $window, Auth) {
  $scope.submit = function(){
    var info = {
      username: $window.localStorage.getItem('user'),
      brand: $scope.brand,
      url: $scope.url,
      amazonUser: $scope.amazonUser
    }
    console.log(info)
    requests.addInfo(info)
  }

  $scope.logout = function(){
    Auth.signout()
  }
});

