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
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-user"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-s-cooperation"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-loading"></i>
            <span slot="title">导航6</span>
          </el-menu-item>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-shop"></i>
              <span>导航5</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="5-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="5-4">
              <template slot="title">选项4</template>
              <el-menu-item index="5-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
    </aside>
</template>

<script>
export default {
  data () {
    return {
      avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
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
