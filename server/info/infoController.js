var Q = require('q');
var Info = require('./infoModel.js');

var findInfo = Q.nbind(Info.findOne, Info);
var createInfo = Q.nbind(Info.create, Info);

module.exports = {
  addInfo: function(req, res, next){
    console.log(req.body)
    var newInfo = {
      username: req.body.username,
      brand: req.body.brand,
      url: req.body.url,
      amazonUser: req.body.amazonUser
    }
    return createInfo(newInfo)
  }
}