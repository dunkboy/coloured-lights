<template>
  <div class="imageLight" :style="{borderColor: borderColor}">
    <img :src="prefix+light.ldUrl" alt="加载失败">
    <div class="text-display">
      <span>{{light.type}}</span>
      <span>{{light.name}}</span>
      <span>作者：{{light.nickname}}</span>
    </div>
    <div class="button-display">
      <el-row type="flex" align="middle" justify="space-around">
        <el-col :span="2">
          <el-button type="text" style="height: 34px; color: white;" class="el-icon-view"></el-button>
        </el-col>
        <el-col :span="2" v-if="$route.path!='/home'">
          <el-button type="text" style="height: 34px;color: white;" @click="del()">删除</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import * as API_URL_CONSTANT from 'constant/api-url-constant'
import model from '../../model/model.js'

export default {
  components: {},
  props: {
    light: {
      type: model.light
    },
    lightIds: {
      type: Array
    }
  },
  methods: {
    chooseLight () {
      const id = this.light.id
      console.log(this.lightIds.length)
      if (this.lightIds.includes(id)) {
        this.$emit('remove-light', this.light.id)
        this.borderColor = '#dcdfe6'
      } else {
        this.$emit('choose-light', this.light.id)
        this.borderColor = 'darkred'
      }
      console.log(this.lightIds.length)
    },
    del () {
      this.$emit('choose-light', this.light.id)
      this.$emit('delete-resource')
      this.$emit('remove-light', this.light.id)
    }
  },
  data () {
    return {
      prefix: process.env.VUE_APP_BASE_API + API_URL_CONSTANT.ACCESS_URL,
      borderColor: '#dcdfe6'
    }
  }
}
</script>

<style scoped>
  .imageLight {
    height: 320px;
    border: 1px solid;
    margin-top: 40px;
  }

  .imageLight span {
    color: white
  }

  .imageLight img {
    height: 240px;
    max-width: 100%;
    width: 100%;
    object-fit: cover;
  }

  .text-display {
    height: 34px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  }

  .button-display {
    height: 40px;
  }
</style>
