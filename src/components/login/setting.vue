<template>
  <div>
    <div class="step-bar text-center padding-t-50">
      <el-steps :active="step" :align-center="true" space="350px"  finish-status="success">
        <el-step class="first-step" title="设置交易密码"></el-step>
        <el-step class="second-step" title="选择功能模块"></el-step>
        <el-step class="third-step" title="菜单配置"></el-step>
      </el-steps>
    </div>
    <div>
      <!-- <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive> -->
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    step () {
      return this.$store.state.stepStatus.stepBar
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    }
  }
  // beforeRouteLeave (to, from, next) {
  //   from.meta.keepAlive = false
  //   next()
  // }
}
</script>

<style lang="less" scope>
@import '../../public.less';
@import './css/setting.less';
</style>
