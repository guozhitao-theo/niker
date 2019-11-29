<template>
  <div id="app">
    <router-view name="Header"/>
    <router-view name="Left"/>
    <router-view/>
  </div>
</template>

<script >
import './public.less'
// import Header from '@/components/common/Header.vue'
// import Left from '@/components/common/Left.vue'
export default {
  name: 'App'
  // component: {
  //   Left
  // }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
body{
  box-sizing: border-box;
}
</style>
