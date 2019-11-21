import {post} from './axios'

let loginrequest = (params) => {
  post(params.url, params.data).then((res) => {
    params.success(res)
  }).catch((err) => {
    params.error(err)
  })
}

export {
  loginrequest
}
