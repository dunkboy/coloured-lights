<template>
  <el-row class="tabBar">
    <el-col :span="2" class="item_logo">
      <img src="~assets/img/logo.jpeg" alt="加载失败" width="100px" height="80%" />
    </el-col>
    <el-col :span="3" :offset="6">
      <el-row class="item_tab">
        <el-col :span="12" :offset="4">
          <el-tabs type="border-card" value="first" @tab-click="handleClick" style="width: 100px;">
            <el-tab-pane label="首页" name="first"></el-tab-pane>
            <!-- <el-tab-pane label="资源库" name="second"></el-tab-pane> -->
          </el-tabs>
        </el-col>
        <el-col :span="12">
            <el-dropdown>
              <el-button type="primary">
                资源库<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </el-col>
      </el-row>

    </el-col>
    <el-col :span="2" offset="11" class="item_profile">
      <div class="profile"></div>
    </el-col>
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

.item_tab{
  display: flex;
  justify-content: center;
  align-items: center;
}

  .el-dropdown>>>.el-button {
    font-size:22px;
  }
  .el-dropdown>>>.el-button--primary {
    background-color:darkred;
    border-color:darkred;
  }

.el-dropdown-menu {
    position: absolute;
    width: 800px;
    height: 200px;
    top: 0;
    left: 0;
    padding: 10px 0;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 0px;
    margin-right: -400px;
    background-color:transparent;
    border: 1px solid #6a6a6a;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(107, 107, 107, 0.1);
}

.el-dropdown-menu li {
   float: left;
   color: white
}

.el-dropdown-menu li:hover {
   color: black;
   background-color: darkred;
}

  .profile {
    width: 100%;
    height: 100%;
    background-color: #409EFF;
  }

</style>
