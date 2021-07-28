<template>
  <div id="home">
    <el-row type="flex" justify="start" class="search"></el-row>
    <el-row :gutter="40" type="flex" justify="center" align="middle" class="walking_lantern">
      <el-col :span="20" :offst="1">
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
      <el-col :span="4">
        <img src="~assets/img/walk/a.jpg" alt="加载失败" class="wechat">
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" align="middle" class="page">

    </el-row>
  </div>
</template>

<script>
// import Name from './components/Name.vue'

export default {
  components: {},
  data () {
    return {
      walk: [{
        id: 1,
        img: '../../assets/img/walk/a.jpg'
      }]
    }
  }

}
</script>

<style scoped>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-col {
    height: 100%;
  }

  #home {
    height: 2000px;
  }

  .walking_lantern {
    height: 450px;
  }

  .search {
    height: 50px;
    background-color: green;
  }

  .page {
    height: 40%;
    background-color: #409EFF;
  }

  .el-carousel>>>.el-carousel__container {
    height: 420px;
  }

  .el-carousel__item img {
    width: 100%;
    height: 420px;
  }

  .wechat {
    width: 200px;
    height: 200px;
    margin-left: 20px;
    margin-top: 125px;
  }
</style>
