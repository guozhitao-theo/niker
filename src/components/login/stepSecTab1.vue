<template>
<!-- 通用功能组件 -->
  <div>
    <div class="function-box">
      <h3>通用功能模块</h3>
      <p>搜索 是是是是送去欧文大家安静看静看瓜静看书记得哈是很是感动和歌声感动还是安静的拔火罐傻瓜书记得哈是很是感动和歌声感动还是安静的拔火罐傻瓜</p>
    </div>
    <module></module>
    <div class="text-center">
      <el-button @click="applymodule" class="applay-btn" type="primary">应用模板</el-button>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import Module from './module.vue'
const {mapState: universalState} = createNamespacedHelpers('module')
export default {
  components: {
    module: Module
  },
  computed: {
    ...universalState(['moduleData'])
  },
  methods: {
    applymodule () {
      window.localStorage.removeItem('customizeModule')
      window.localStorage.setItem('universalModule', JSON.stringify(this.moduleData))
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
