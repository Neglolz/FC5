/**
 * Created by johnnyribeiro on 28/11/2017.
 */
const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = ( app ) => {
  app.post('/register',
    AuthenticationControllerPolicy.register(),
    AuthenticationController.register())
}
