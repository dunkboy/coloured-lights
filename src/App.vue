<template>
  <div id="app">
    <main-login></main-login>
  </div>
</template>

<script>
import MainLogin from 'views/login/MainLogin'

export default {
  name: 'app',
  components: {
    MainLogin
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
