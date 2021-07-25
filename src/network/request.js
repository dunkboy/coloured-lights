import axios from 'axios'
import {
  Message
} from 'element-ui'
import store from '@/store/index'

export function request (config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    config.headers.token = store.state.token
    return config
  }, err => {
    Promise.error(err)
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(
    // 请求成功
    res => {
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (res.status === 200) {
        if (res.data.code !== 200) {
          // 后台返回错误消息
          Message.error(res.data.msg)
        }
        return res.data
      } else {
        return Promise.reject(res)
      }
    },
    // 请求失败
    error => {
      if (error.response) {
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        Message.error(error.response.data.msg)
        return Promise.reject(error)
      } else {
        // 处理断网的情况
        // eg:请求超时或断网时，更新state的network状态
        // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
        // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
        Message.error('请求超时或断网!')
      }
    })

  // 3.发送真正的网络请求
  return instance(config)
}
