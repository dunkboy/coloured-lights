<template>
  <el-row class="tabBar">
    <el-col :span="2" class="item_logo">
      <img src="~assets/img/logo.jpeg" alt="加载失败" />
    </el-col>
    <el-col :span="5" :offset="5">
      <el-row class="item_tab">
        <el-col :span="10">
          <el-tabs type="border-card" value="first" @tab-click="handleClick">
            <el-tab-pane label="首页" name="first"></el-tab-pane>
            <!-- <el-tab-pane label="资源库" name="second"></el-tab-pane> -->
          </el-tabs>
        </el-col>
        <el-col :span="14">
          <el-dropdown>
            <el-button type="primary">
              资源库<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in dictResource" :key="item.id">{{item.name}}</el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>

    </el-col>
    <el-col :span="2" :offset="9" class="item_profile">
      <div class="profile"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      dictResource: []
    }
  },
  methods: {
    handleClick (tab, event) {
      this.$router.push({
        path: '/home'
      })
    }
  },
  created () {
    this.$api.dict.get({
      pageSize: 50,
      current: 1,
      code: '001'
    }).then((data) => {
      if (data.data != null) {
        this.dictResource = data.data.pageData
      }
    })
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

  .item_logo img {
    width: 40px;
    height: 40px;
    object-fit: cover;
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
    height: 50px;
    line-height: 50px;
    font-size: 22px;
    color: white;
    background-color: darkred;
    border: 0px;
  }

  .el-tabs>>>.el-tabs__content {
    padding: 0;
  }

  .el-tabs>>>.el-tabs__header {
    background-color: darkred;
    border-bottom: 0;
  }

  .item_tab {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-dropdown>>>.el-button {
    width: 100%;
    font-size: 22px;
  }

  .el-dropdown>>>.el-button--primary {
    background-color: darkred;
    border-color: darkred;
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
    background-color: transparent;
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
