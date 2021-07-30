<template>
  <div class="imageLight">
    <img :src="prefix+light.ldUrl" alt="加载失败">
    <span><h4 style="color: white;">作者：{{light.nickname}}</h4></span>
  </div>
</template>
<script>
import * as API_URL_CONSTANT from 'constant/api-url-constant'
import model from '../../model/model.js'

export default {
  components: {
  },
  props: {
    light: {
      type: model.light

    }
  },
  data () {
    return {
      prefix: process.env.VUE_APP_BASE_API + API_URL_CONSTANT.ACCESS_URL
    }
  }
}
</script>

<style scoped>
  .imageLight {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    height: 320px;
    border: 1px solid #dcdfe6;
    margin-top: 40px;
  }

  .imageLight img {
    height: 280px;
    max-width: 100%;
    object-fit: cover;
  }

</style>
