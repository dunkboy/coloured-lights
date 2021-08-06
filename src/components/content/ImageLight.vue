s<template>
  <div class="imageLight" :style="{borderColor: borderColor}">
    <img :src="prefix+light.thumbnailUrl" alt="加载失败" class="thumbnail">
    <div class="text-display">
      <span>{{light.type}}</span>
      <span>{{light.name}}</span>
      <span>作者：{{light.nickname}}</span>
    </div>
    <div class="button-display">
      <el-row type="flex" align="middle" justify="space-around">
        <el-col :span="2">
          <el-button type="text" style="height: 34px; color: white;" class="el-icon-view" @click="displayLdurl()">
          </el-button>
        </el-col>
        <el-col :span="2" v-if="$route.path!=='/home'">
          <el-button type="text" style="height: 34px;color: white;" @click="del()">删除</el-button>
        </el-col>
      </el-row>
    </div>

    <el-dialog ref="tk" center :title="light.name" :visible="dialogVisibleLdimg" @close="dialogLdimgClose"
      :close-on-click-modal="false">
      <div class="ldimg">
        <img :src="prefix+light.ldUrl" alt="加载失败" :style="{width: truewidth, height: trueheight}">
      </div>
      <div v-if="($store.state.token!=='' && light.hdUrl!==null) || light.type==='实拍图' " slot="footer"
        class="dialog-footer">
        <a :href="prefix+light.hdUrl" target="_blank" style="color: darkred;">高清下载</a>
      </div>
    </el-dialog>

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
    },
    displayLdurl () {
      this.preload()
    },
    preload: async function () {
      await this.loadimg().then(res => {
        this.truewidth = res.width + 'px'
        this.trueheight = res.height + 'px'
        this.$refs.tk.$el.firstChild.style.width = (res.width + 100) + 'px'
        // this.$refs.tk.$el.firstChild.style.height = (res.height + 50) + 'px'
      })
      this.dialogVisibleLdimg = true
    },
    loadimg: function () {
      return new Promise(resolve => {
        const img = new Image()
        img.src = this.prefix + this.light.ldUrl
        img.onload = function () {
          resolve({
            width: img.width,
            height: img.height
          })
        }
      })
    },
    dialogLdimgClose () {
      this.dialogVisibleLdimg = false
    }
  },
  data () {
    return {
      prefix: process.env.VUE_APP_BASE_API + API_URL_CONSTANT.ACCESS_URL,
      borderColor: '#dcdfe6',
      truewidth: '800px',
      trueheight: '600px',
      dialogVisibleLdimg: false
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

  .thumbnail {
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

  /*  .el-dialog__wrapper>>>.el-dialog {
    width: 65%;
  } */

  .ldimg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
