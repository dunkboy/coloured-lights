import restful from '../restful.js'
import * as API_URL_CONSTANT from 'constant/api-url-constant'

const resource = {
  // 分页获取图片
  get (page) {
    return restful.get(API_URL_CONSTANT.RESOURCE_URL, page)
  }
  // 其他接口…………
}

export default resource
