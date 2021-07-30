<template>
  <div id="home">
    <el-row :gutter="20" type="flex" justify="center" class="search">
      <el-col :span="9">
        <el-input v-model="keyword" prefix-icon="el-icon-search" placeholder="请输入内容" clearable class="searchInput">
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="infor" class="searchButton">搜索</el-button>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" align="middle" class="walking_lantern">
      <el-col :span="20">
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
        <img src="~assets/img/walk/a.jpg" alt="加载失败">
      </el-col>
    </el-row>

    <el-row :gutter="30" type="flex" justify="start" align="middle" class="page">
      <el-col :span="6" v-for="item in data.pageData" :key="item.id">
        <image-light :light="item"></image-light>
      </el-col>
    </el-row>

    <el-row class="pageCpn">
      <el-pagination background="" layout="total, sizes, prev, pager, next, jumper" :total="data.total"
        :current-page="data.current" :page-size="data.pageSize" :page-sizes="[2, 4, 6, 8,10,12]"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" @prev-click="getImagePage" @snext-click="getImagePage">
      </el-pagination>
    </el-row>

  </div>
</template>

<script>
// import Name from './components/Name.vue'
import WindowOpr from '../../utils/window.js'
import * as MUTATIONS_TYPE from '../../store/mutations_type.js'
import ImageLight from 'components/content/ImageLight.vue'

export default {
  components: {
    ImageLight
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      console.log(this.data.current)
      this.$api.resource.get({
        current: this.data.current,
        pageSize: val
      }).then(data => {
        this.data = data.data
      })
    },
    handleCurrentChange (val) {
      console.log(this.data.pageSize)
      console.log(`当前页: ${val}`)
      this.$api.resource.get({
        current: val,
        pageSize: this.data.pageSize
      }).then(data => {
        this.data = data.data
      })
    },
    getImagePage (val) {
      this.$api.resource.get({
        current: this.data.current,
        pageSize: this.data.pageSize
      }).then(data => {
        this.data = data.data
      })
    }
  },
  data () {
    return {
      keyword: '',
      data: {
        current: 1,
        pageSize: 2,
        total: 0,
        pageData: []
      }
    }
  },
  created () {
    // 在页面加载时读取sessionStorage里的状态信息
    if (!this.$store.state.token) {
      this.$store.commit(MUTATIONS_TYPE.SET_TOKEN, WindowOpr.getItem('token'))
      this.$store.dispatch('userinfoStateUpdate')
    }
    // this.$api.resource.get({
    //   current: this.data.current,
    //   pageSize: this.data.pageSize
    // }).then(data => {
    //   this.data = data.data
    // })
  }

}
</script>

<style scoped>
  .el-col {
    height: 100%;
  }

  .walking_lantern {
    margin-top: 5px;
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
  }

  .el-input>>>.el-input__inner {
    background-color: transparent;
  }

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
</style>
