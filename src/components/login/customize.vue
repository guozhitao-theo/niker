<template>
  <div class="customize-box">
    <div class="customize-header">
      <h3>选择您需要新增的功能模块</h3>
      <p>您可以根据你自己的企业制定自己的功能模块</p>
    </div>
    <div class="customize-content">
      <ul class="function-conten clearfix">
        <li @click="choosed(index)" :key="index" v-for="(item,index) in chooseModule" class="fl function-list" >
          <div class="function-name">{{item.name}}</div>
          <div class="function-descript">{{item.descript}}</div>
          <span class="checked-function"><i onselectstart="return false">√</i></span>
        </li>
      </ul>
      <el-dialog
        class="updateModuleDialog-box"
        title="菜单设置"
        :visible.sync="updateModuleDialog"
        width="30%"
        :show-close=false
        center
        >
          <ul class="updateModuleDialog">
            <li>
              <p>{{dialogModule.name}}</p>
              <div>
                <span>显示名称 :</span><input v-model="dialogModule.showname" class="showNameIput" placeholder=""/>
              </div>
              <el-popover
                trigger="click"
                title="模块确定删除吗？"
                v-model="deleteVisible"
              >
              <div>
                <el-button size="mini" @click="deleteVisible=false">取消</el-button>
                <el-button size="mini"  type="warning " @click="deleteModule(dialogModule.id)">确认</el-button>
              </div>
                <span  slot="reference" class="el-icon-delete"></span>
              </el-popover>
            </li>
          </ul>
        <span slot="footer" class="dialog-footer">
          <el-button @click="updateModuleDialog = false">取 消</el-button>
          <el-button type="primary" @click="saveUpdateModuleDialog">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div class="text-center">
      <el-button @click="goback" type="info">返回</el-button>
      <el-button type="primary">提交修改</el-button>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState: moduleState, mapMutations: moduleMutations} = createNamespacedHelpers('module')
export default {
  data () {
    return {
      deleteVisible: true,
      updateModuleDialog: false,
      updateModule: '',
      dialogModule: '',
      allUpdateModule: {}
    }
  },
  // beforeRouteLeave: (to, from, next) => {
  //   if (to.path === '/setting/stepStore') {
  //     to.meta.keepAlive = true
  //   } else {
  //     to.meta.keepAlive = false
  //   }
  //   next()
  // },
  methods: {
    ...moduleMutations(['changeTabIndex']),
    choosed (index) {
      this.updateModuleDialog = true
      this.dialogModule = this.chooseModule[index]
    },
    saveUpdateModuleDialog () {
      this.updateModuleDialog = false
      this.$set(this.chooseModule, this.dialogModule.id, this.dialogModule)
      window.localStorage.removeItem('chooseModule')
      window.localStorage.setItem('customizeModule', JSON.stringify(this.chooseModule))
    },
    goback () {
      this.changeTabIndex(2)
      this.$router.push('/setting/stepStore')
    },
    deleteModule (id) {
      this.deleteVisible = false
      this.updateModuleDialog = false
      this.$delete(this.chooseModule, id)
      window.localStorage.setItem('chooseModule', JSON.stringify(this.chooseModule))
    }
  },
  computed: {
    ...moduleState(['chooseModule'])
  }
}
</script>

<style>

</style>
