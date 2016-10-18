var infoController = require('../info/infoController.js')
var userController = require('../user/userController.js')

module.exports = function(app, express){
  app.get('/:url', infoController.checkInfo);

  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);

  app.get('/api/:url', infoController.getInfo)
  app.post('/api/user/info', infoController.addInfo)
}