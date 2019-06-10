<template>
  <div class="up">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img src="../../assets/logo.png" class="avatar">
      <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
    </el-upload>

    <el-form ref="formItem" :model="formItem" label-width="80px" size='small'>
      <el-form-item label="姓名">
        <el-input v-model="formItem.userName"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="formItem.nickName"></el-input>
      </el-form-item>
      <el-form-item label="移动电话">
        <el-input v-model="formItem.mobilePhone"></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱">
        <el-input v-model="formItem.eMail"></el-input>
      </el-form-item>
      <el-form-item label="备注信息">
        <el-input type="textarea" v-model="formItem.remark"></el-input>
      </el-form-item>
      <el-form-item label="设置主题">
        <el-color-picker v-model="color2" @active-change="change"></el-color-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "user",
    data() {
      return {
        loading: true, //修改个人信息回调
        formItem: { //修改个人信息参数
          userName: 'SiRei',
          nickName: 'LookHere',
          mobilePhone: '1234567890',
          eMail: '1234567890@qq.com',
          remark: '这个人很懒，什么都没有留下'
        },
        imageUrl: './../../assets/logo.png',
        color2: ''
      }
    },
    computed: {
      ...mapGetters(['bgColor'])
    },
    mounted() {
      if (this.bgColor == '') {
        this.color2 = localStorage.getItem('color')
        this.$store.dispatch('getColor', localStorage.getItem('color'))
      } else {
        this.color2 = localStorage.getItem('color')
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2;
        return isJPG && isLt2M
      },
      change(ee) {
        console.log(this.color, '23')
        this.$store.dispatch('getColor', ee)
      }
    }
  }
</script>

<style>
  .up .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    /*position: relative;*/
    overflow: hidden;
    margin: 0 auto;
    margin-left: 150px;
  }

  .up .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .up .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }

  .up .avatar {
    width: 100px;
    height: 100px;
    display: block;
    margin: 0 auto;
  }

  .up {
    width: 400px;
    margin: 0 auto;
    margin-top: 40px;
    line-height: 60px;
  }
</style>
