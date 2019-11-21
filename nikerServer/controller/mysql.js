let mysql = require("mysql")
let config = require("../config/config")
// 建立数据库连接池
let pool = mysql.createPool(config.mysqlconfig)
let query = (sql, data) => {
  return new Promise(function(resolve, reject){
    pool.getConnection((err,connection) => {
      if (!err) {
        connection.query(sql, data,function(error, result){
          if (!error) {
            resolve(result)
          } else {
            reject(error)
            console.log('数据库连接失败')
          }
          // 释放数据库连接
          connection.release()
        })
      } else {
        reject(err)
        console.log('请检查数据库是否配置正确')
      }
    })
  })
}

module.exports = query