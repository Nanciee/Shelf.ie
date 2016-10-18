angular.module('store-front.services', [])
.factory('requests', function ($http) {

  var getInfo = function(url){
    return $http({
      method: 'GET',
      url: 'api' + url
    })
    .then(function(resp){
      return resp.data;
    });
  };

  var addInfo = function(info){
    return $http({
      method: 'POST',
      url: 'api/user/info',
      data: info
    })
    .then(function(resp){
      return resp;
    });
  };

  return {
    getInfo: getInfo,
    addInfo: addInfo,
  };
})
.factory('Auth', function ($http, $location, $window) {
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
