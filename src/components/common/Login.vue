<template>
  <div class="form">
    <div class="hello">
      <h2>欢迎来 嗨，彩灯</h2>
    </div>
    <div class="loginForm">
      <el-form status-icon :model="loginForm" :rules="loginRules" ref="loginForm">
        <el-form-item prop="loginName">
          <el-input v-model="loginForm.loginName" placeholder="请输入用户名">
            <i slot="prefix" class="el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码">
            <i slot="prefix" class="el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary" style="width:180px">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Login',
  components: {},
  created () {
    this.keyupSubmit()
  },
  props: {
    loginForm: {
      type: Object,
      required: true
    },
    loginRules: {
      type: Object,
      required: true
    }
  },
  methods: {
    keyupSubmit () {
      document.onkeydown = e => {
        const _key = window.event.keyCode
        if (_key === 13) {
          this.login()
        }
      }
    },
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('submit')
        } else {
          this.$emit('errHandle')
        }
      })
    }
  }
}
</script>

<style scoped>
  .loginForm {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    margin-top: -40px;
  }

  .form {
    /* display: flex; */
    /* flex-direction: column-reverse; */
    background-color: #000000;
    width: 500px;
    height: 400px;
  }

  .hello {
    margin-top: 100px;
    text-align: center;
  }

  .loginForm>>>.el-input__inner {
    font-size: 20px;
    border-radius: 6px;
    background-color: #9b9c9b;
    width: 380px;
  }

  .loginForm>>>input::-webkit-input-placeholder {
    color: #d6d6d6;
  }

  .loginForm>>>.el-button--primary {
    background-color: #ab3a51;
    border-color: #ab3a51;
  }

  .loginForm>>>.el-form-item {
    margin-bottom: 22px;
    text-align: center;
  }

  .loginForm>>>.el-form {
    margin-top: 100px;
    text-align: center;
  }

  #app11 {}
</style>
