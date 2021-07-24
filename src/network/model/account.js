import restful from '../restful'
import * as API_URL_CONSTANT from 'constant/api-url-constant'

const account = {

  // 登录接口
  login (data) {
    return restful.post(API_URL_CONSTANT.LOGIN_URL, data)
  }
  // 其他接口…………
}

export default account
