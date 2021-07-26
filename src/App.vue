<template>
  <div id="app">
    <router-view name="MainLogin"></router-view>
    <el-container>
      <el-header style="height: 60px"></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style scoped>
  @import "assets/css/base.css";

  .el-header {
    background-color: #42B983;
  }

  .el-main {
    height: calc(100vh - 60px);
    background-color: #343434;
  }
</style>
