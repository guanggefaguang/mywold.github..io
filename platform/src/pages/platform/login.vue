<template>
  <div class="allbig">
    <div class="login">
      <div class="login_left">
        <div class="login_left_img">
          <div class="login_left_small">
            <img src="../../../static/img/logo.png">
            <div class="login_left_whilt">
              ETL
            </div>
          </div>
          <p>Welcome to Data PlatForm</p>
        </div>

        <p class="brief">
          ETL 数据平台<br/>
          为了给各个业务平台提供稳定可靠的数据<br/>
          提供一个通用的数据处理流程解决方案<br/>
          生成一些面向主题的、集成的、随时间变化的、但信息本身相对稳定的数据集合<br/>
          整合多个数据源的历史数据进行细粒度的、多维的分析<br/>
          为需要业务智能的企业，提供指导业务流程改进、监视时间、成本、质量以及控制。<br/>
          信息资源管理（信息流）集成一<br/>体化的企业管理软件
        </p>
      </div>

      <div class="login_right">
        <p class="login_eng">登录<span>/login</span></p>
        <div class="login_icon">
          <img src="../../../static/img/login_name.png" class="login_nameimg">
          <input type="text" class="name" placeholder="请输入用户名" v-model="form.urn" @keyup.enter="keyDown"/>
          <img src="../../../static/img/login_pass.png" class="login_passimg">
          <input type="password" class="pass" placeholder="请输入密码" v-model="form.pwd" @keyup.enter="keyDown"/>
        </div>

        <button class="login_button" @click="keyDown">登录</button>
      </div>

    </div>
  </div>
</template>
<script>
  import {Login} from '../../api/api'

  export default {
    name: 'login',
    data() {
      return {
        form: {
          urn: '',
          pwd: ''
        }
      }
    },
    methods: {

      //登录成功时会存 droseakey 到loca中。 账号都为admin
      loginNow() {
        Login(this.form).then((res) => {
          console.log(res.data.data.droseakey)
          localStorage.setItem('droseakey', res.data.data.droseakey)
          this.$router.push('home/index')
        })
      },
      keyDown() {
        if (this.form.username == '') {
          this.$notify.error({
            title: '错误',
            message: '请输入用户名'
          });
        } else if (this.form.password == '') {
          this.$notify.error({
            title: '错误',
            message: '请输入密码'
          });
        } else {
          this.loginNow()
        }

      }
    }
  }
</script>
<style scoped>
  .allbig {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url(../../../static/img/loginbg.jpg) center no-repeat;
    background-size: cover;
    position: relative;
    font-family: "微软雅黑";
  }

  .login {
    width: 880px;
    height: 555px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -440px;
    margin-top: -277.5px;
  }

  .login_left {
    width: 367px;
    height: 100%;
    background: rgba(43, 83, 156, 0.7);
    float: left;
  }

  .login_left_small {
    overflow: hidden;
    width: 216px;
    margin: 0 auto;
    margin-top: 138px;
  }

  .login_left_small img {
    float: left;
  }

  .login_left_whilt {
    float: right;
    margin-top: 5px;
    width: 43px;
    height: 21px;
    background: #ffffff;
    text-align: center;
    line-height: 21px;
    font-size: 19.32px;
    color: #4274c7;
  }

  .login_left_img p {
    font-size: 14.25px;
    color: #FFFFFF;
    margin-top: 29px;
    text-align: center;
  }

  .brief {
    width: 300px;
    margin: 0 auto;
    text-align: center;
    font-size: 12px;
    color: #FFFFFF;
    line-height: 22px;
    margin-top: 50px;
  }

  .login_right {
    width: 423px;
    height: 100%;
    background: #ffffff;
    float: right;
    padding: 0px 45px;
    box-sizing: initial;
  }

  .login_eng {
    color: #4274c7;
    font-size: 20px;
    margin-top: 104px;
    font-weight: bold;
  }

  .login_eng span {
    color: #cccccc;
  }

  .login_icon {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .login_nameimg {
    position: absolute;
    right: 0px;
    top: 76px;
  }

  .login_passimg {
    position: absolute;
    right: 0px;
    top: 152px;
  }

  .name {
    outline: none;
    width: 100%;
    background: #FFFFFF;
    border: none;
    border-bottom: 1px solid #999999;
    height: 50px;
    font-size: 14px;
    margin-top: 60px;
  }

  .pass {
    outline: none;
    width: 100%;
    background: #FFFFFF;
    border: none;
    border-bottom: 1px solid #999999;
    height: 50px;
    font-size: 14px;
    margin-top: 24px;
  }

  .login_button {
    width: 99px;
    height: 32px;
    border: 1px solid #4274c7;
    color: #4274c7;
    font-size: 14px;
    background: none;
    outline: none;
    cursor: pointer;
    margin-top: 96px;
  }

  .login_button:hover {
    background: #4274C7;
    color: #FFFFFF;
    transition: all 0.5s;
  }
</style>
