angular.module('store-front', ['store-front.manage', 'ngRoute'])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/manage/manage.html',
      controller: 'ManageController'
    })
    .otherwise({
      redirectTo: '/'
    });
})