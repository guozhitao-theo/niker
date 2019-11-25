<template>
  <div class="changePassword-box text-center">
    <div class="changePassword-tip text-left">
      <p>是否需要委托niker平台加密您的交易密码?</p>
      <p class="on">若未选择加密保存服务，请您务必认真保存，一旦丢失无法找回!</p>
      <label class="isSave-switch"  @click="openProtocol = true">
        <el-switch
        v-model="isSave"
        >
        </el-switch>
        <span onselectstart="return false" class="yes">是</span>
        <span onselectstart="return false" class="no">否</span>
      </label>
    </div>
    <div class="changePassword-container">
      <el-form :gutter="20" ref="changePwdForm" :rules="rules" :model="changePwdForm" label-width="120px" >
        <el-form-item label="输入新交易密码" prop="password">
          <el-input type="password" v-model="changePwdForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认新交易密码" prop="ackPassword">
          <el-input type="password" v-model="changePwdForm.ackPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="输入验证码" prop="valiCode">
          <el-col :span="14">
            <el-input  type="text" v-model="changePwdForm.valiCode" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="6" :offset="3" >
             <el-button type="primary">获取验证码</el-button>
          </el-col>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="changePwd-btn">确认提交</el-button>
    </div>
    <el-dialog
      custom-class="openProtocol"
      title="加密保存密码协议"
      top="40px"
      :visible.sync="openProtocol"
      width="40%"
      :before-close="handleClose"
      center>
      <div class="scrollbar-box">
        <el-scrollbar class="protocol-text" :tag="'div'">
          <div>
            <p>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">男方姓名： 出生年月： 民族： 身份证号： 住址：</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">女方姓名： 出生年月： 民族： 身份证号： 住址：</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">双方于 年 月 日在____区人民政府办理结婚登记手续。(结婚证号码 )，并生有1名婚生女( ，19 年 月 日出生)</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">现因双方性格不合无法共同生活，夫妻感情已完全破裂，就自愿离婚一事达成如下协议：</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">一、双方自愿解除夫妻关系。</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">二、婚生女 由女方直接抚养。抚养期间，男方承担婚生子的抚养费(包括医疗费、教育费、保险费) 元;</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">女方应悉心抚养婚生子，不得有虐待、遗弃、家庭暴力行为;</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">男方每个月可以探望婚生女 次，也可以到学校探望，每周可与婚生女共同居住 天，寒暑假可以共同居住 天，女方有协助的义务;</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">探望权的行使以不影响学业为准。</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">任何一方对婚生女身心健康有损害行为的，将视为放弃抚养、教育的权利和义务，另一方有权要求变更直接抚养权或中止、取消探望权;</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">三、财产分割</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">(1)双方认可婚后分开居住期间各自收入归各自所有的约定;</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">双方认可婚后个人随身物品归个人所有。个人随身物品中包含衣物、首饰、个人用品、手机、化妆品 等个人专用物品。</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">婚前财产：男方 女方</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">婚前个人债权债务：男方 女方</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">婚姻存续期间个人债权债务：男方 女方</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">（2)女方自离婚证领取之日起，取得下列夫妻之间共同财产的所有权：彩电一台、 冰箱一台、 洗衣机一台、 空调一台、 家俱一套、 组合音响 一套、生活日用品 件，总计约 元;</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">银行存款 元，归女方 元，男方 元;运营出租车，作价 元，归女方 元，男方 元。</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">(3)双方确认无其它共同债权、无共同债务。</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">四、男方确认给女方经济补偿 元;</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">五、离婚后，一方不得干扰另一方的生活，不得向第三方泄漏另一方的个人隐私和商业秘密，不得有故意损坏另一方名誉的行为，否则承担违约金 元。</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">六、双方确认对方是完全民事行为能力的人，能够自行处分自己的行为和财产。</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">七、本协议经双方签字后，待有效的法律文书生效时具有法律效力。双方承诺对该协议书的字词义非常清楚，并愿意完全履行本协议书，不存在受到胁迫、欺诈、误解情形。</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">八、本协议书一式三份，甲乙双方各执一份，婚姻登记部门保留一份。在双方签字，并经婚姻登记机关办理相应手续后生效。</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">男方女方：</span><br/>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
                <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; background-color: rgb(255, 255, 255);">年 月 日 年 月 日</span>
            </p>
          </div>
        </el-scrollbar>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="openProtocol = false">取 消</el-button> -->
        <el-button type="primary" class="agreeProtocol" @click="openProtocol = false">我已经阅读并同意该协议</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    var validatePassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else {
        if (this.changePwdForm.ackPassword !== '') {
          this.$refs.changePwdForm.validateField('ackPassword')
        }
        callback()
      }
    }
    var validateAckPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请再次输入密码'))
      } else if (value !== this.changePwdForm.password) {
        return callback(new Error('两次密码不一致'))
      }
      callback()
    }
    return {
      changePwdForm: {
        password: '',
        ackPassword: '',
        valiCode: ''
      },
      rules: {
        password: [{
          validator: validatePassword, trigger: 'blur'
        }],
        ackPassword: [{
          validator: validateAckPassword, trigger: 'blur'
        }],
        valiCode: [{
          required: true, message: '请输入验证码', trigger: 'blur'
        }]
      },
      isSave: 0,
      openProtocol: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style scoped>

</style>
