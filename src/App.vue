<template>
  <div id="app">
    <router-view name="MainLogin" v-if="$route.path.indexOf('/login') === 0"></router-view>
    <el-container v-else>
      <el-header style="height: 50px">
        <tab-bar></tab-bar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TabBar from 'components/common/TabBar.vue'
import WindowOpr from './utils/window.js'
import * as MUTATIONS_TYPE from './store/mutations_type.js'

export default {
  name: 'app',
  components: {
    TabBar
  },
  created () {
    // 在页面加载时读取sessionStorage里的状态信息
    this.$store.commit(MUTATIONS_TYPE.SET_TOKEN, WindowOpr.getItem('token') === null ? '' : WindowOpr.getItem(
      'token'))
    this.$store.dispatch('userinfoStateUpdate')
  }
}
</script>

<style scoped>
  @import "assets/css/base.css";

  .el-header {
    width: 100%;
    padding: 0;
    overflow: hidden;
  }

  .el-main {
    /* height: calc(100vh - 60px); */
    height: 100%;
    background-color: #343434;
  }

  .el-container {
    height: 100%;
  }
</style>
