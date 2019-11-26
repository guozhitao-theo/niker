let jwt = require('jsonwebtoken')

 const vrerifyToken = function(req, res){
    let token = req.headers.token
    jwt.verify(token, 'password', function(err, decode) {
      if (!err) {
        res.set({
          token: true
        })
      } else {
        res.set({
          token: false
        })
      }
    })
  }
module.exports = {
  vrerifyToken
}