angular.module('store-front', ['store-front.manage', 'store-front.store', 'store-front.services', 'store-front.auth', 'ngRoute'])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/manage', {
      templateUrl: 'app/manage/manage.html',
      controller: 'ManageController',
      authenticate: true
    })
    .when('/signin', {
      templateUrl: 'app/Auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/Auth/signup.html',
      controller: 'AuthController'
    })
    .otherwise({
      redirectTo: '/manage'
    });

  $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.shortly');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});