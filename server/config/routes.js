var infoController = require('../info/infoController.js')
var userController = require('../user/userController.js')

module.exports = function(app, express){
  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.post('/api/user/info', infoController.addInfo)

  app.get('/api/:url', infoController.getInfo)
  app.get('/:url', infoController.checkInfo);

}