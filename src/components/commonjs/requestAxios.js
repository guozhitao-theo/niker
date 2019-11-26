import {post} from './axios'
// 登陆请求
let loginrequest = (params) => {
  post(params.url, params.data).then((res) => {
    params.success(res)
  }).catch((err) => {
    if (params.error) {
      params.error(err)
    }
  })
}
// 获取验证码
let getValiCode = (params) => {
  post(params.url, params.data).then((res) => {
    params.success(res)
  }).catch((err) => {
    if (params.error) {
      params.error(err)
    }
  })
}
// 提交交易密码
let submitChangePwd = (params) => {
  post(params.url, params.data).then((res) => {
    params.success(res)
  }).catch((err) => {
    if (params.error) {
      params.error(err)
    }
  })
}
export {
  loginrequest,
  getValiCode,
  submitChangePwd
}
