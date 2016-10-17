angular.module('store-front.services', [])
.factory('requests', function ($http) {

  var getInfo = function(){
    return $http({
      method: 'GET',
      url: ''
    })
    .then(function(resp){
      return resp.data;
    });
  };

  var addInfo = function(info){
    return $http({
      method: 'POST',
      url: '',
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