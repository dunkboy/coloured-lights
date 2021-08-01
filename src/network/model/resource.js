import restful from '../restful.js'
import * as API_URL_CONSTANT from 'constant/api-url-constant'

const resource = {
  // 分页获取图片
  get (page) {
    return restful.get(API_URL_CONSTANT.RESOURCE_URL, page)
  },
  // 分页获取我的作品
  profile (page) {
    return restful.get(API_URL_CONSTANT.RESOURCE_PROFILE_URL, page)
  },
  // 表单上传
  upload (formData) {
    return restful.form(API_URL_CONSTANT.RESOURCE_URL, formData)
  },
  // 删除资源
  delete (id) {
    return restful.delete(API_URL_CONSTANT.RESOURCE_URL, '/' + id)
  }
  // 其他接口…………
}

export default resource
