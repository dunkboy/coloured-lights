<template>
  <div id="mainLogin">
    <login :loginForm="loginForm" :loginRules="loginRules" @submit="submit" @errHandle="errHandle"></login>
  </div>
</template>

<script>
import Login from 'components/common/Login'

export default {
  components: {
    Login
  },
  props: {},
  data () {
    return {
      loginForm: {
        loginName: '',
        password: ''
      },
      loginRules: {
        loginName: [{
          required: true,
          message: '用户名不能为空',
          trigger: 'blur'
        },
        {
          max: 20,
          message: '用户名不能超过20个字符',
          trigger: 'blur'
        }
        ],
        password: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submit () {
      this.$api.account.login(this.loginForm).then(res => {
        if (res.code !== 200) {
          return
        }
        this.$store.dispatch('setLoginRes', {
          token: res.data.token,
          userinfo: res.data.userinfo
        })

        this.$router.replace({
          path: '/home'
        })
      })
    },
    errHandle () {
      this.$message.error('请重新输入！')
    }
  }

}
</script>

<style scoped>
  #mainLogin {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(~assets/img/login-background.jpg);
    /* background-size: contain; */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
