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
  }
  // 其他接口…………
}

export default restful
