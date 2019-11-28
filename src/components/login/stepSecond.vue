<template>
<!-- 步骤条第二步骤 功能模块选择 -->
  <div class="chooseModule">
    <el-tabs class="chooseModule-tabchange" @tab-click="changeTab" v-model="activeTab" :tab-position="tabPosition">
      <el-tab-pane  :disabled="true" label="角色管理"></el-tab-pane>
      <el-tab-pane label="通用功能"><stepSecTab1></stepSecTab1></el-tab-pane>
      <el-tab-pane label="自定义功能模块"><stepSecTab2></stepSecTab2></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import stepSecTab1 from './stepSecTab1'
import stepSecTab2 from './stepSecTab2'
const {mapMutations: moduleMutation} = createNamespacedHelpers('module')
export default {
  data () {
    return {
      tabPosition: 'left',
      activeTab: '1'
    }
  },
  components: {
    stepSecTab1,
    stepSecTab2
  },
  methods: {
    ...moduleMutation(['changeTabIndex']),
    changeTab (value) {
      this.changeTabIndex(value.index)
    }
  },
  mounted () {
    let backModule = JSON.parse(window.localStorage.getItem('chooseModule'))
    if (backModule) {
      this.activeTab = '2'
      this.changeTabIndex(2)
    } else {
      this.activeTab = '1'
    }
  }
}
</script>

<style>

</style>
