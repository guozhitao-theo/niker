<template>
  <div id="app">
    <router-view name="Header"/>
    <router-view name="Left"/>
    <router-view/>
  </div>
</template>

<script>
import './public.less'
export default {
  name: 'App'
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
