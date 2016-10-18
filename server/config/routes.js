var infoController = require('../info/infoController.js')

module.exports = function(app, express){
  app.post('/api/user/info', infoController.addInfo)
}