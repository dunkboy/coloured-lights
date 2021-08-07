s<template>
  <div id="home">
    <el-row :gutter="20" type="flex" justify="center" class="search">
      <el-col :span="2" class="el-dropdown-col">
        <el-dropdown @command="handleCommand">
          <el-button type="primary">
            {{currentChooseResourcee}}<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="全部">全部
            </el-dropdown-item>
            <el-dropdown-item :command="item" v-for="item in dictResource" :key="item.id">{{item.name}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="9">
        <el-input v-model="keyword" prefix-icon="el-icon-search" placeholder="请输入标签关键字" clearable class="searchInput">
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="infor" class="searchButton" @click="search">搜索</el-button>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" align="middle" class="walking_lantern">
      <el-col :span="16" :offset="1">
        <el-carousel indicator-position="outside">
          <el-carousel-item>
            <img src="~assets/img/walk/a.jpg" alt="加载失败">
          </el-carousel-item>
          <el-carousel-item>
            <img src="~assets/img/walk/b.jpg" alt="加载失败">
          </el-carousel-item>
          <el-carousel-item>
            <img src="~assets/img/walk/c.jpg" alt="加载失败">
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="4" class="wechat">
        <img src="~assets/img/wechat2weima.jpg" alt="加载失败">
        <span style="color: white;margin-top: 50px;font-size: 20px;">扫码获取高清资源图</span>
      </el-col>
    </el-row>

    <el-row :gutter="30" type="flex" justify="start" align="middle" class="page">
      <el-col :span="6" v-for="item in data.pageData" :key="item.id">
        <image-light :light="item"></image-light>
      </el-col>
    </el-row>

    <el-row class="pageCpn">
      <el-pagination background="" layout="total, sizes, prev, pager, next, jumper" :total="data.total"
        :current-page="data.current" :page-size="data.pageSize" :page-sizes="[12, 24, 36, 48]"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" @prev-click="pre" @next-click="next">
      </el-pagination>
    </el-row>

  </div>
</template>

<script>
import ImageLight from 'components/content/ImageLight.vue'

export default {
  components: {
    ImageLight
  },
  methods: {
    handleSizeChange (val) {
      this.$api.resource.get({
        current: this.data.current,
        pageSize: val,
        keyword: this.keyword,
        type: this.type
      }).then(data => {
        this.data = data.data
      })
    },
    handleCurrentChange (val) {
      this.$api.resource.get({
        current: val,
        pageSize: this.data.pageSize,
        keyword: this.keyword,
        type: this.type
      }).then(data => {
        this.data = data.data
      })
    },
    pre (cpage) {
      this.$api.resource.get({
        current: cpage,
        pageSize: this.data.pageSize,
        keyword: this.keyword,
        type: this.type
      }).then(data => {
        this.data = data.data
      })
    },
    next (cpage) {
      this.$api.resource.get({
        current: cpage,
        pageSize: this.data.pageSize,
        keyword: this.keyword,
        type: this.type
      }).then(data => {
        this.data = data.data
      })
    },
    search () {
      this.$api.resource.get({
        current: this.data.current,
        pageSize: this.data.pageSize,
        keyword: this.keyword,
        type: this.type
      }).then(data => {
        this.data = data.data
      })
    },

    handleCommand (command) {
      if ((typeof (command) === 'string')) {
        this.currentChooseResourcee = '资源库'
      } else {
        this.currentChooseResourcee = command.name
      }
      this.type = command.type
      this.$api.resource.get({
        current: this.data.current,
        pageSize: this.data.pageSize,
        type: this.type,
        keyword: this.keyword
      }).then(data => {
        this.data = data.data
      })
    },
    keyupSubmit () {
      document.onkeydown = e => {
        const _key = window.event.keyCode
        if (_key === 13) {
          this.search()
        }
      }
    }
  },
  data () {
    return {
      currentChooseResourcee: '资源库',
      dictResource: [],
      keyword: '',
      type: null,
      data: {
        current: 1,
        pageSize: 12,
        total: 0,
        pageData: []
      }
    }
  },
  created () {
    this.keyupSubmit()

    this.$api.resource.get({
      current: this.data.current,
      pageSize: this.data.pageSize
    }).then(data => {
      this.data = data.data
    })

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
  .el-col {
    height: 100%;
  }

  .walking_lantern {
    margin-top: 15px;
    height: 450px;
  }

  .search {
    height: 50px;
  }

  .page {
    height: 100%;
    flex-wrap: wrap;
  }

  .el-carousel>>>.el-carousel__container {
    height: 420px;
  }

  .el-carousel__item img {
    width: 100%;
    height: 420px;
    object-fit: cover;
  }

  .wechat {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .wechat img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  .searchButton {
    background-color: darkred;
    color: white;
    border: 1px solid #8B0000;
    border-radius: 20px;
    /* margin-top: 5px; */
  }

  .searchInput {
    /* margin-top: 5px; */
  }

  /*  .el-input>>>.el-input__inner {
    background-color: transparent;
  } */

  .el-input>>>.el-input__inner:focus {
    border: 1px solid #8B0000;
  }

  .el-input>>>.el-input__inner:hover {
    border: 1px solid #8B0000;
  }

  .pageCpn {
    margin-top: 20px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-pagination>>>.el-pager li:not(.disabled).active {
    background-color: darkred;
  }

  .el-pagination>>>.el-pagination__total {
    color: white;
    font-size: 18px;
  }

  .el-pagination>>>.el-pagination__jump {
    color: white;
    font-size: 15px;
  }

  .el-dropdown>>>.el-button {
    width: 100%;
    font-size: 10px;
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
    /* background-color: transparent; */
    border: 1px solid #6a6a6a;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(107, 107, 107, 0.1);
  }

  .el-dropdown-menu li {
    float: left;
    color: black
  }

  .el-dropdown-menu li:hover {
    color: white;
    background-color: darkred;
  }

  .el-dropdown-col {
    margin-right: 37px;
  }
</style>
