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