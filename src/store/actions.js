import account from '../network/model/account.js'
import * as MUTATIONS_TYPE from './mutations_type.js'

export default {
  userinfoStateUpdate (context) {
    account.session().then((data) => {
      if (data.code === 200) {
        context.commit(MUTATIONS_TYPE.SET_USER_INFO, data.data)
      } else {
        context.commit(MUTATIONS_TYPE.CLEAR)
      }
    })
  },
  setLoginRes (context, payload) {
    context.commit(MUTATIONS_TYPE.SET_USER_INFO, payload.userinfo)
    context.commit(MUTATIONS_TYPE.SET_TOKEN, payload.token)
  }
}
