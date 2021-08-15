<template>
  <el-row class="tabBar">
    <el-col :span="2" :offset="1" class="item_logo">
      <img src="~assets/img/logo.png" alt="加载失败" />
    </el-col>
    <el-col :span="5" :offset="5">
      <el-row class="item_tab">
        <el-col>
          <el-tabs type="border-card" :value="currentRouter" @tab-click="handleClick">
            <el-tab-pane label="首页" name="/home"></el-tab-pane>
            <el-tab-pane label="我的作品" name="/profile"></el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2" :offset="9" class="item_profile">
      <div v-if="$store.state.token !== ''" class="profile">
        <el-dropdown @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-user-solid"></i>{{$store.state.userinfo.nickname}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div v-else class="login">
        <div class="topLogin" title="彩灯登录" @click="jumpToLogin">登录</div>
      </div>
    </el-col>

  </el-row>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      currentRouter: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      if (tab.name === '/profile') {
        // 判断是否登录
        if (this.$store.state.token === '') {
          this.$message.warning('请先登录！')
          return
        }
      }
      this.$router.push({
        path: tab.name
      })
    },
    jumpToLogin () {
      this.$router.push({
        path: '/login'
      })
    },
    logout () {
      this.$api.account.logout().then(data => {
        if (data.code === 200) {
          this.$store.dispatch('userinfoStateUpdate').then(code => {
            if (code !== 200) {
              this.$router.push({
                path: '/home'
              })
            }
          })
        }
      })
    },
    handleCommand (command) {
      if (command === '0') {

      }
      if (command === '1') {
        this.logout()
      }
    }
  },
  created () {},
  watch: {
    $route () {
      this.currentRouter = this.$route.path
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

  .item_logo img {
    width: 110px;
    height: 50px;
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

  .login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .topLogin {
    color: white;
    cursor: pointer;
  }

  .profile {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 60px;
  }

  .el-dropdown-link {
    color: white;
    cursor: pointer;
  }

  .el-dropdown-menu li:hover {
    color: white;
    background-color: darkred;
  }
</style>
