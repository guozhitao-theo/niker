<template>
<!-- 步骤条第二步骤 功能模块选择 -->
  <div class="chooseModule">
    <el-tabs class="chooseModule-tabchange" v-model="activeTab" :tab-position="tabPosition">
      <el-tab-pane  :disabled="true" label="角色管理"></el-tab-pane>
      <el-tab-pane label="通用功能"><stepSecTab1></stepSecTab1></el-tab-pane>
      <el-tab-pane label="自定义功能模块"><stepSecTab2></stepSecTab2></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import stepSecTab1 from './stepSecTab1'
import stepSecTab2 from './stepSecTab2'
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
  }
}
</script>

<style>

</style>
