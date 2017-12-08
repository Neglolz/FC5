/**
 * Created by johnnyribeiro on 28/11/2017.
 */
const joi = require('joi')
module.exports = {
    register(res, req, next) {
      const schema = {
        email: joi.string().email(),
        password: joe.string().regex(
          new RegExp('[a-zA-Z0-9]{8-32}$')
        )
      }

      next()
    }
}
