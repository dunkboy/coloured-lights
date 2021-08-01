import {
  request
} from './request'

const restful = {
  // post
  post (url, data) {
    return request({
      url: url,
      method: 'post',
      data: data
    })
  },
  // get
  get (url, params) {
    return request({
      url: url,
      method: 'get',
      params: params
    })
  },
  // post form
  form (url, data) {
    return request({
      url: url,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      method: 'post',
      data: data
    })
  },
  // delete path
  delete (url, data) {
    return request({
      url: url + data,
      method: 'delete'
    })
  }
  // 其他接口…………
}

export default restful
