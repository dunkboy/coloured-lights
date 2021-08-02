s<template>
  <!-- 点击上传作品的弹出框 -->
  <el-dialog center title="上传作品" :visible="dialogFormVisibleUpload" @close="dialogClose" :close-on-click-modal="flag">
    <div class="form">
      <el-form status-icon label-position="right" label-width="100px" :model="form" :rules="rules" ref="form">

        <el-form-item prop="name" label="资源名称">
          <el-input v-model="form.name" autocomplete="off" placeholder="输入资源名称" clearable></el-input>
        </el-form-item>

        <el-form-item prop="type" label="资源库类型">
          <el-select v-model="form.type" placeholder="请选择类型">
            <el-option v-for="item in resources" :label="item.name" :value="item.type" :key="item.id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="输入标签">
          <el-input v-model="form.labelTemp" autocomplete="off" placeholder="输入标签后请点击右边⊕,支持多个" style="width: 90%;"
            clearable>
          </el-input>
          <el-button icon="el-icon-circle-plus-outline" circle @click="doLabelTemp"></el-button>
        </el-form-item>

        <el-form-item prop="labels" label="已添加标签">
          <el-row :gutter="10" type="flex" justify="start" align="middle" class="addLabel">
            <span v-for="item in currentLabels" :key="item"
              style="border: 1px solid #409EFF;margin-left: 10px;border-radius: 12px; margin-top: 5px;text-align: center;">
              {{item}}
              <el-button icon="el-icon-circle-close" circle @click="doLabelTemp2(item)"></el-button>
            </span>
          </el-row>
        </el-form-item>

        <el-form-item prop="file" label="上传资源" ref="upload">
          <el-upload class="upload-demo" action="111" :on-change="handleChange" :auto-upload="false"
            :file-list="fileList">
            <el-button slot="trigger" size="small" type="primary">选取资源文件</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10MB</div>
          </el-upload>
        </el-form-item>

      </el-form>
    </div>

    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel()">取 消</el-button>
      <el-button type="primary" @click="addResource()">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import ArrayUtitls from '../../utils/array.js'

export default {
  components: {},
  props: {
    dialogFormVisibleUpload: {
      type: Boolean,
      required: true
    },
    resources: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      fileList: [],
      flag: false,
      currentLabels: [],
      form: {
        name: '',
        labelTemp: '',
        imageUrl: '',
        type: '',
        labels: '',
        file: ''
      },
      rules: {
        name: [{
          required: true,
          message: '资源名称不能为空',
          trigger: 'blur'
        },
        {
          max: 20,
          message: '资源名称不能超过20个字符',
          trigger: 'blur'
        }
        ],
        type: [{
          required: true,
          message: '资源类型不能为空',
          trigger: 'blur'
        }],
        labels: [{
          required: true,
          message: '标签不能为空',
          trigger: 'blur'
        }],
        file: [{
          required: true,
          message: '请上传资源'
        }]
      }
    }
  },
  methods: {
    handleChange (file, fileList) {
      var URL = null
      if (window.createObjectURL !== undefined) {
        URL = window.createObjectURL(file.raw) // basic
      } else if (window.URL !== undefined) {
        URL = window.URL.createObjectURL(file.raw) // IE,google,360,Safari,firefox
      } else if (window.webkitURL !== undefined) {
        URL = window.webkitURL.createObjectURL(file.raw) // webkit
      }
      this.form.imageUrl = URL
      this.form.file = file.raw
      if (fileList.length > 0) {
        this.$refs.upload.clearValidate() // 去掉file验证
      }
    },
    cancel () {
      this.$refs.form.clearValidate()
      this.$emit('cancel')
      this.clearForm()
    },
    dialogClose () {
      this.$refs.form.clearValidate()
      this.$emit('dialogClose')
      this.clearForm()
    },
    clearForm () {
      this.form.name = ''
      this.form.type = ''
      this.form.labels = ''
      this.form.file = ''
      this.form.labelTemp = ''
      this.form.imageUrl = ''
      this.currentLabels = []
      this.fileList = []
    },
    addResource () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: '资源上传中',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })

          const formData = new FormData()
          formData.append('name', this.form.name)
          formData.append('type', this.form.type)
          formData.append('labels', this.form.labels)
          formData.append('file', this.form.file)
          this.$api.resource.upload(formData).then(res => {
            loading.close()
            if (res.code === 200) {
              this.cancel()
            }
          }).catch(err => {
            this.$message.error(err)
            loading.close()
          })
        } else {
          this.$message.error('请重新输入！')
        }
      })
    },
    doLabelTemp () {
      if (this.form.labelTemp === '') {
        return
      }
      if (this.currentLabels.includes(this.form.labelTemp)) {
        return
      }
      this.currentLabels.push(this.form.labelTemp)
      this.form.labels = this.currentLabels.join(',')
    },
    doLabelTemp2 (label) {
      const arr = this.currentLabels
      ArrayUtitls.removeByValue(arr, label)
      this.form.labels = this.currentLabels.join(',')
    }
  }
}
</script>

<style scoped>
  .el-dialog__wrapper>>>.el-dialog {
    width: 30%;

  }

  /* .el-dialog__wrapper>>>.el-form-item__content{
  display: inline-block;
} */

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-form-item {
    width: 400px;
  }

  .el-button.is-circle {
    border-radius: 50%;
    padding: 0px;
    margin-left: 3px;
  }

  .el-upload__tip {
    color: red;
  }

  .addLabel {
    flex-wrap: wrap;
  }
</style>
