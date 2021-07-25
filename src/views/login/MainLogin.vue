<template>
  <div id="mainLogin">
    <login>
      <label slot="loginName" for="loginName">登录名<input type="text" id="loginName"
          v-model.trim="loginDTO.loginName" /></label>
      <label slot="password" for="password">密码<input type="password" id="password"
          v-model.trim="loginDTO.password" /></label>
      <button slot="loginButton" type="button" @click="login">登录</button>
    </login>
  </div>
</template>

<script>
import Login from 'components/common/Login'

export default {
  components: {
    Login
  },
  data () {
    return {
      loginDTO: {
        loginName: '',
        password: ''
      }

    }
  },
  methods: {
    login () {
      this.$api.account.login(this.loginDTO).then(res => {
        if (res.code !== 200) {
          return
        }
        this.$store.state.token = res.data.token
        this.$store.state.userinfo = res.data.userinfo
      })
    }
  }

}
</script>

<style>
  #mainLogin {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 800px;
    height: 800px;
    background-color: red;
  }
</style>
