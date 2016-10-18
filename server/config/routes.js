var infoController = require('../info/infoController.js')

module.exports = function(app, express){
  app.get('/:url', infoController.checkInfo);
  app.post('/api/user/info', infoController.addInfo)
}