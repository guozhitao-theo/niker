let data = require('../controller/data')
let jwt = require('jsonwebtoken')
let md5 = require('md5')
let verifyToken = require('../common/common')

const login = async (req, res) => {
	verifyToken.vrerifyToken(req, res)
	let mobile = req.body.mobile || req.query.mobile
	let password = req.body.password || req.query.password
	// 生成token
	let token = jwt.sign({password:password},'password',{expiresIn:60*30})
	if (!mobile) {
		return res.json({
			status: 501,
			message: '请输入手机号'
		})
	}
	if (!password) {
		return res.json({
			status: 502,
			message: '请输入密码'
		})
	}
	let mobileREG = /^1[134578]\d{9}$/
	if (!mobileREG.test(mobile)) {
		return res.json({
			status: 503,
			message: '请输入正确的手机格式'
		})
	}
	if (!(password.length>=6 && password.length<18)) {
		return res.json({
			status: 504,
			message: '请输入正确的密码格式'
		})
	}
	password = md5(password)
	let arr = [mobile, password]
	let result = await data.islogin(arr)
	if (!result) {
		return res.json({
			status: 503,
			message: '用户不存在'
		})
	} else {
		return res.json({
			status: 200,
			data:{
				message: '登陆成功',
				token: token,
				infor: {
					result:result
				}
			}
		})
	}
}
module.exports = {
	login
}