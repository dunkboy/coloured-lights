<template>
  <div id="login">
    <label for="loginName">登录名<input type="text" id="loginName" v-model.trim="loginDTO.loginName" /></label>
    <label for="password">密码<input type="password" id="password" v-model.trim="loginDTO.password" /></label>
    <button type="button" @click="login">登录</button>
  </div>
</template>

<script>
export default {
  components: {},
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
      this.$api.account.login(this.loginDTO)
    }
  }

}
</script>

<style>
</style>
