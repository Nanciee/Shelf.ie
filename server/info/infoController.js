var Q = require('q');
var Info = require('./infoModel.js');
var secret = require('../secret/secret.js')
var ebay = require('ebay-api')

var findInfo = Q.nbind(Info.findOne, Info);
var createInfo = Q.nbind(Info.create, Info);


module.exports = {
  addInfo: function(req, res, next){
    var newInfo = {
      username: req.body.username,
      brand: req.body.brand,
      url: req.body.url,
      amazonUser: req.body.amazonUser
    }
    return createInfo(newInfo);
  },

  checkInfo: function(req, res, next){
    findInfo({url: req.params.url})
    .then(function(info){
      if(!info){
        return next();
      }
      res.sendFile('store.html', {root: './client/app/store'});
    });
  },

  getInfo: function(req, res, next){

    findInfo({url: req.params.url})
    .then(function(info){
      if(!info){
        return res.send(404)
      }
      console.log(info)
      var params = {
        itemFilter: [
          {name: 'Seller', value: info.amazonUser}
        ]
      };

      ebay.xmlRequest({
        serviceName: 'Finding',
        opType: 'findItemsAdvanced',
        appId: secret.app,
        devId: secret.dev,
        certId: secret.cert,
        params: params,
        parser: ebay.parseResponseJson

      }, function(error, items){
        var result = items.searchResult.item
        res.send(result)
      })
    });
  }
}