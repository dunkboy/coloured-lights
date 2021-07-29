import Window from '../utils/window.js'
import * as MUTATIONS_TYPE from './mutations_type.js'

export default {

  [MUTATIONS_TYPE.SET_TOKEN] (state, token) {
    Window.setItem('token', token)
    state.token = token
  },
  [MUTATIONS_TYPE.SET_USER_INFO] (state, userinfo) {
    Window.setItemObj('userinfo', userinfo)
    state.userinfo = userinfo
  },
  [MUTATIONS_TYPE.CLEAR] (state) {
    Window.removeItem('token')
    Window.removeItem('userinfo')
    state.token = ''
    state.userinfo = null
  }
}
