<template>
  <div id="login">
    <div id="loginName"><slot name="loginName"></slot></div>
    <div id="password"><slot name="password"></slot></div>
    <div id="loginButton"><slot name="loginButton"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
  #login {
/*    display: flex;
    justify-content: center; */
    /* position: absolute; */
    width: 500px;
    height: 500px;
    background-color: green;
  }
</style>
