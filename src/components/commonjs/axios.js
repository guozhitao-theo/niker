import axios from 'axios'
import qs from 'qs'
import {api} from './api'
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
