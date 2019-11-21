let query = require("../mysql")
module.exports = {
  islogin: async function(data) {
    let sql = 'select id,nickname,mobile,email,isSave,avatar,createTime from user where mobile = ? and password = ?'
    let result = await query(sql, data).then((result) => {
      if (result.length>0) {
        return result[0]
      } else {
        return false
      }
    }).catch(function(err){
      if (err) {
        return err
      }
    })
    return(result)
  }
}