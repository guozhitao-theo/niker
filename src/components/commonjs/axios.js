import axios from 'axios'
import qs from 'qs'
import {api} from './api'
import Router from 'vue-router'

// 请求拦截在请求发送之前做的事情
axios.interceptors.request.use((config) => {
  let token = window.localStorage.getItem('token')
  if (token) {
    config.headers.token = token
  }
  return config
}, (error) => {
  if (error) {
    console.log('拦截出错')
  }
})

// 响应拦截
axios.interceptors.response.use((response) => {
  if (response) {
    if (response.headers.token === 'fase') {
      console.log('别忘记这里页面跳转到登陆页面')
      alert('这是个提示：别忘记这里页面跳转到登陆页面')
      Router.push('/login')
    }
  }
  return response
}, (error) => {
  if (error) {
    console.error(error)
  }
})

// 封装 axios
let request = (url, method = 'get', data = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: api + url,
      method: method,
      data: qs.stringify(data),
      params: data
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

let get = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(api + url, {
      params: data
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

let post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(api + url, qs.stringify(data)).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}
export {
  request,
  get,
  post
}
