<template>
  <div style="width: 100%;height: calc(100vh - 80px);background: #3a8ee6;padding: 0;margin: 0;">

    <div class="posi">
      <el-tabs type="border-card">
        <el-tab-pane label="查询企业">
          <el-input placeholder="请输入完整的企业名称" v-model="input" class="input-with-select">
            <el-button slot="append" type="primary" icon="el-icon-search" @click="goplat"></el-button>
          </el-input>
          <!--<p>请输入完整的企业名称</p>-->
        </el-tab-pane>
        <el-tab-pane label="查询个人">
          <el-form :model="form" label-width="80px" size="small">
            <el-form-item label="姓名">
              <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
              <el-input v-model="form.code" placeholder="请输入身份证号"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="gopersonal">确定</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
  export default {
    name: "search",
    data() {
      return {
        input: '',
        form: {
          name: '',
          code: '',
          phone: ''
        }
      }
    },
    methods: {
      goplat() {
        this.$router.push(`/home/plat?name=${this.input}`)
      },
      gopersonal() {
        this.$router.push(`/home/personal?name=${this.form.name}`)
      }
    }
  }
</script>

<style scoped>
  .el-select .el-input {
    width: 130px;
  }

  .input-with-select {
    /*width: 400px;*/
    background-color: #fff;
  }

  .posi {
    width: 500px;
    position: absolute;
    top: 38%;
    left: calc(50% - 250px);
  }

  .posi p {
    text-align: center;
    font-size: 14px;
    letter-spacing: 2px;
    color: #cccccc;
    margin-top: 15px;
  }
</style>
