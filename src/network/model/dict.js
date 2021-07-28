import restful from '../restful.js'
import * as API_URL_CONSTANT from 'constant/api-url-constant'

const dict = {
  get (params) {
    return restful.get(API_URL_CONSTANT.DICT_URL, params)
  }
}

export default dict
