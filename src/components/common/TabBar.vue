<template>
  <el-row class="tabBar">
    <el-col :span="2" class="item_logo">
      <img src="~assets/img/logo.jpeg" alt="加载失败" width="100px" height="80%" />
    </el-col>
    <el-col :span="4" :offset="6" class="item_tab">
      <el-tabs type="border-card" value="first" @tab-click="handleClick" style="width: 200px;">
        <el-tab-pane label="首页" name="first"></el-tab-pane>
        <el-tab-pane label="资源库" name="second"></el-tab-pane>
        <!-- <el-tab-pane name="fourth">
            <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
          </el-tab-pane> -->
      </el-tabs>
    </el-col>
    <el-col :span="2" class="item_dropdown"></el-col>
    <el-col :span="2" class="item_profile"></el-col>
  </el-row>
</template>

<script>
export default {
  components: {},
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
  .tabBar {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: darkred;
  }

  .el-col {
    height: 100%;
  }

  .item_logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-tabs {
    border: 0px;
    box-shadow: 0 0 0 0;
  }

  .el-tabs>>>.el-tabs__item.is-active {
    color: white;
    background-color: red;
  }

  .el-tabs>>>.el-tabs__item:not(.is-disabled):hover {
    color: #000000;
  }

  .el-tabs>>>.el-tabs__item:first-child {
    margin-left: 0px;
  }

  .el-tabs>>>.el-tabs__item:last-child {
    margin-left: 0px;
  }

  .el-tabs>>>.el-tabs__item {
    text-align: center;
    width: 100px;
    height: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    color: white;
    background-color: darkred;
    border: 0px;
  }

  .el-tabs>>>.el-tabs__content {
    padding: 0;
  }
</style>
