<template>
<!-- 通用功能组件 -->
  <div>
    <div class="function-box">
      <h3>自定义功能模块</h3>
      <p>搜索 是是是是送去欧文大家安静看静看瓜静看书记得哈是很是感动和歌声感动还是安静的拔火罐傻瓜书记得哈是很是感动和歌声感动还是安静的拔火罐傻瓜</p>
    </div>
    <module></module>
    <div class="text-center">
      <el-button @click="applyModule" class="applay-btn" type="primary">应用模板</el-button>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import Module from './module.vue'
const {mapMutations: stepMutations} = createNamespacedHelpers('stepStatus')
export default {
  components: {
    module: Module
  },
  methods: {
    ...stepMutations(['changeStep']),
    applyModule () {
      let chooseModule = JSON.parse(window.localStorage.getItem('chooseModule'))
      if (!chooseModule) {
        this.$message({
          message: '请选择自定义功能模块',
          type: 'error',
          duration: 1000
        })
      } else {
        this.changeStep(3)
        this.$router.push('/setting/customize')
      }
    }
  }
}
</script>

<style>

</style>
