<template>
  <div class="login-box">
    <div class="login-container">
      <img width="350px" src="@/assets/newlogo.png" alt="">
      <el-form class="form-login" :rules="rules" ref="formlogin" :label-position="labelPosition" label-width="0px" :model="formlogin">
        <el-form-item  class="form-login-label font-18" prop="user_name" >
          <el-input class="form-login-input" placeholder="手机号" prefix-icon="el-icon-phone" v-model="formlogin.user_name"></el-input>
        </el-form-item>
        <el-form-item class="form-login-label font-18" prop="password" >
          <el-input class="form-login-input" show-password placeholder="密码"  prefix-icon="el-icon-lock" v-model="formlogin.password"></el-input>
        </el-form-item>
      </el-form>
      <div class="clearfix">
        <div class="login-options fl">
          <label>
            <input class="remember" type="checkbox">
            <span class="font-white font-14">记住账户</span>
          </label>
        </div>
        <div class="fr">
          <router-link class="font-14 text-main" to="/forget">忘记密码？ 立即找回</router-link>
        </div>
      </div>
      <el-button class="login-btn margin-t-25" @click="login('formlogin')" type="success">立即登录</el-button>
      <div class="font-white padding-t-25">白素贞商家系统后台</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var checktel = (rule, value, callback) => {
      let reg = /^1[3456789]\d{9}$/
      if (!value) {
        return callback(new Error('电话不能为空'))
      }
      if (!reg.test(value)) {
        return callback(new Error('电话格式错误'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'left',
      formlogin: {
        user_name: '',
        password: ''
      },
      rules: {
        user_name: [
          { validator: checktel, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 8 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (formname) {
      this.$refs[formname].validate((valid) => {
        console.log(valid)
      })
    }
  }
}
</script>

<style lang="less" scope>
@import '../../public.less';
@import './css/login.less';
</style>
