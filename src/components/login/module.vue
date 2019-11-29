<template>
  <ul class="function-conten clearfix">
    <li @click="choosed(index)" :key="index" v-for="(item,index) in moduleLists" class="fl function-list" :class="{checked: ischecked(item.id)}">
      <div class="function-name">{{item.name}}</div>
      <div class="function-descript">{{item.descript}}</div>
      <span class="checked-function"><i onselectstart="return false">√</i></span>
    </li>
    <input type="hidden" id="refreshed" value="no">
  </ul>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState: moduleState, mapMutations: moduleMutations} = createNamespacedHelpers('module')

export default {
  data () {
    return {
      nowChooseModule: {}
    }
  },
  methods: {
    ...moduleMutations(['addChooseModule', 'deletechooseModule']),
    choosed (index) {
      if (Number(this.tabIndex) === 2) {
        if (this.chooseModule[index + 1]) {
          this.deletechooseModule(this.moduleData[index])
          this.$delete(this.nowChooseModule, index + 1, this.moduleData[index])
        } else {
          this.addChooseModule(this.moduleData[index])
          this.$set(this.nowChooseModule, index + 1, this.moduleData[index])
        }
        window.localStorage.setItem('chooseModule', JSON.stringify(this.chooseModule))
      } else {
        return false
      }
    },
    ischecked (id) {
      if (Number(this.tabIndex) === 2 && this.nowChooseModule.hasOwnProperty(id)) {
        return true
      } else {
        return false
      }
    }
  },
  computed: {
    ...moduleState(['tabIndex', 'moduleData', 'chooseModule']),
    moduleLists () {
      return this.moduleData
    }
  },
  watch: {
    nowChooseModule: function (val) {
    }
  },
  beforeMount () {
    let backModule = JSON.parse(window.localStorage.getItem('chooseModule'))
    if (backModule) {
      if (Object.keys(backModule).length > 0) {
        Object.assign(this.nowChooseModule, backModule)
      }
    }
  },
  mounted () {
    onload = function () {
      var refreshedId = document.getElementById('refreshed')
      console.log(refreshedId)
      if (refreshedId.value === 'no') {
        refreshedId.value = 'yes'
      } else {
        refreshedId.value = 'no'
        location.reload()
      }
    }
  }
}
</script>

<style>

</style>
