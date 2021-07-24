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
  }
  // 其他接口…………
}

export default restful
