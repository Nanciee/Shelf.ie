var infoController = require('../info/infoController.js')

module.exports = function(app, express){
  app.get('/:url', infoController.checkInfo);

  app.get('/api/:url', infoController.getInfo)
  app.post('/api/user/info', infoController.addInfo)
}