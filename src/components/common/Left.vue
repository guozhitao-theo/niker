<template>
    <aside class="">
        <div class="aside-avatar-box">
             <el-avatar class="aside-avatar" :src="avatarUrl"></el-avatar>
             <p class="font-white">重庆奈尔科有限公司</p>
        </div>
        <el-menu
          default-active="1"
          class="el-menu"
          @open="handleOpen"
          @close="handleClose"
          :unique-opened= true
          background-color="#134676"
          text-color="#fff"
          active-text-color="#fff">
            <el-menu-item :key="index" v-for="(item, index) in chooseModuleNav" index= item.id>
              <i :class="item.icon"></i>
              <router-link :to="item.path">{{item.showname}}</router-link>
            </el-menu-item>
        </el-menu>
    </aside>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState: chooseState} = createNamespacedHelpers('module')
export default {
  data () {
    return {
      avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      chooseModuleNav: {}
    }
  },
  computed: {
    ...chooseState(['chooseModule'])
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  beforeMount () {
    let customizeModule = JSON.parse(window.localStorage.getItem('customizeModule'))
    let universalModule = JSON.parse(window.localStorage.getItem('universalModule'))
    if (customizeModule) {
      if (Object.keys(customizeModule).length > 0) {
        Object.assign(this.chooseModuleNav, customizeModule)
      } else {
        Object.assign(this.chooseModuleNav, universalModule)
      }
    } else {
      Object.assign(this.chooseModuleNav, universalModule)
    }
  }
}
</script>

<style>
aside {
  display: inline-block;
  width: 224px;
  background: #134676;
}
.aside-avatar-box {
  height: 130px;
  width: 224px;
  text-align: center;
}
.aside-avatar {
  margin-top: 25px;
  margin-bottom: 15px;
}
.el-menu {
  border: 0;
}
</style>
