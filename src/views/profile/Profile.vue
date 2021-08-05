<template>
  <div id="profile">
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

    <el-row>
      <el-button class="upload" @click="upload">上传作品</el-button>
      <!-- <el-button class="upload" @click="deleteResource">删除</el-button> -->
    </el-row>

    <el-row :gutter="30" type="flex" justify="start" align="middle" class="page">
      <el-col :span="6" v-for="item in data.pageData" :key="item.id">
        <image-light :light="item" @delete-resource="deleteResource()" @choose-light="chooseLight"
          @remove-light="removeLight" :lightIds="lightIds" :borderColor="borderColor"></image-light>
      </el-col>
    </el-row>

    <el-row class="pageCpn">
      <el-pagination background="" layout="total, sizes, prev, pager, next, jumper" :total="data.total"
        :current-page="data.current" :page-size="data.pageSize" :page-sizes="[12, 24, 36, 48]"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" @prev-click="pre" @next-click="next">
      </el-pagination>
    </el-row>

    <resource-upload :dialogFormVisibleUpload="dialogFormVisibleUpload" :resources="dictResource"
      @dialogClose="dialogClose" @cancel="cancel">
    </resource-upload>

  </div>
</template>

<script>
import ImageLight from 'components/content/ImageLight.vue'
import ResourceUpload from './ResourceUpload.vue'
import ArrayUtitls from '../../utils/array.js'

export default {
  components: {
    ImageLight,
    ResourceUpload
  },
  methods: {
    handleSizeChange (val) {
      this.$api.resource.profile({
        current: this.data.current,
        pageSize: val,
        keyword: this.keyword,
        type: this.type
      }).then(data => {
        this.data = data.data
        this.lightIds = []
      })
    },
    handleCurrentChange (val) {
      this.$api.resource.profile({
        current: val,
        pageSize: this.data.pageSize,
        keyword: this.keyword,
        type: this.type
      }).then(data => {
        this.data = data.data
        this.lightIds = []
      })
    },
    pre (cpage) {
      this.$api.resource.profile({
        current: cpage,
        pageSize: this.data.pageSize,
        keyword: this.keyword,
        type: this.type
      }).then(data => {
        this.data = data.data
        this.lightIds = []
      })
    },
    next (cpage) {
      this.$api.resource.profile({
        current: cpage,
        pageSize: this.data.pageSize,
        keyword: this.keyword,
        type: this.type
      }).then(data => {
        this.data = data.data
        this.lightIds = []
      })
    },
    search () {
      this.getResourcePage()
    },
    handleCommand (command) {
      if ((typeof (command) === 'string')) {
        this.currentChooseResourcee = '资源库'
      } else {
        this.currentChooseResourcee = command.name
      }
      this.type = command.type
      this.getResourcePage()
    },
    keyupSubmit () {
      document.onkeydown = e => {
        const _key = window.event.keyCode
        if (_key === 13) {
          this.search()
        }
      }
    },
    upload () {
      this.dialogFormVisibleUpload = true
    },
    dialogClose () {
      this.refresh()
      this.dialogFormVisibleUpload = false
    },
    cancel () {
      this.dialogFormVisibleUpload = false
    },
    refresh () {
      this.getResourcePage()
    },
    getResourcePage () {
      this.$api.resource.profile({
        current: this.data.current,
        pageSize: this.data.pageSize,
        type: this.type,
        keyword: this.keyword
      }).then(data => {
        if (data.data != null) {
          this.data = data.data
        }
        this.lightIds = []
        if (data.code === 1001) {
          this.$router.push('/home')
        }
      })
    },
    chooseLight (id) {
      console.log('chooseLight')
      this.lightIds.push(id)
    },
    removeLight (id) {
      console.log('removeLight')
      ArrayUtitls.removeByValue(this.lightIds, id)
    },
    deleteResource () {
      const id = this.lightIds[0]
      if (this.lightIds.length === 0) {
        this.$message.warning('请先选择要删除的资源！')
        return
      }
      this.$confirm('此操作将永久删除资源, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$api.resource.delete(id).then(res => {
          if (res.code === 200) {
            this.refresh()
          }
        })
        // for (const id of this.lightIds) {
        //   this.$api.resource.delete(id).then(res => {
        //     if (res.code === 200) {
        //       this.refresh()
        //     }
        //   })
        // }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  data () {
    return {
      borderColor: '#dcdfe6',
      dialogFormVisibleUpload: false,
      currentChooseResourcee: '资源库',
      lightIds: [],
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
    this.getResourcePage()
    this.lightIds = []

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

  .search {
    height: 50px;
  }

  .page {
    height: 100%;
    flex-wrap: wrap;
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

  .upload {
    background-color: darkred;
    color: white;
    border-color: darkred;
    margin-left: 20px;
  }
</style>
