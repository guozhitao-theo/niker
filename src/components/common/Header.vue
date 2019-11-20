<template>
<div class="header clearfix">
    <div class="header-left fl">
        <img src="../../assets/logo1.png" alt="">
        <span class="name">重庆奈尔科有限公司</span>
    </div>
    <div class="header-right">
        <el-avatar  class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span><a>头像</a></span>
        <span><router-link to="/login" tag="a">退出<i class="el-icon-error"></i></router-link></span>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
.header {
    width: 100%;
    height: 60px;
    background: #003465;
}
.name {
    /* display: inline-block; */
    line-height: 60px;
    color: #fff;
    vertical-align: 22px;
}
.header-left {
    height: 60px;
}
.header-right {
    float: right;
    color: #fff;
    line-height: 60px;
    padding-right: 50px;
}
.header-right span {
    padding: 0 10px;
}
.avatar {
    vertical-align: -13px;
    padding: 0 !important;
}
</style>
