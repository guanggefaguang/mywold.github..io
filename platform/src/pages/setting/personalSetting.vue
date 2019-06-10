<template>
  <div>
    <el-card class="box-card" style="padding: 10px 0px;">
      <div slot="header" class="clearfix">
        <span class="bold">个人信息采集设置</span>
        <el-button style="float: right;padding: 5px 15px;" type="primary" @click="getaddpersonal">保存</el-button>
      </div>
      <el-form label-width="100px">
        <el-form-item label="更新频率(天)">
          <el-input v-model="params.aliveday" placeholder="请输入天数" style="width: 220px;"></el-input>
        </el-form-item>
      </el-form>
      <div style="margin-top: 20px">
        <p style="font-weight: bold;padding-bottom: 20px;">个人采集配置</p>
        <el-checkbox-group
          v-model="checkedCities1" style="margin-top: 10px;" @change="change">
          <el-checkbox v-for="sin in tableData" :label="sin.id.toString()" :key="sin.id">{{sin.name}}</el-checkbox>
        </el-checkbox-group>
      </div>
    </el-card>
  </div>
</template>

<script>
  import {getperinterlist, getpersonalinfo, getaddpersonalinfo} from '../../api/api'

  export default {
    name: "personalSetting",
    data() {
      return {
        tableData: [],
        params: {
          aliveday: '',
          intids: [],
          droseakey: `${localStorage.getItem('droseakey')}`
        },
        checkedCities1: []
      }
    },
    mounted() {
      this.getallPer()
      this.getpersona()
    },
    methods: {
      change() {
        this.params.intids = this.checkedCities1.toString()
      },
      getallPer() {
        let params = {
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getperinterlist(params).then((res) => {
          this.tableData = res.data.data
        })
      },
      getpersona() {
        let params = {
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getpersonalinfo(params).then((res) => {
          this.params.aliveday = res.data.data.aliveday
          this.checkedCities1 = res.data.data.intids.split(',')
        })
      },
      getaddpersonal() {
        getaddpersonalinfo(this.params).then((res) => {
          this.getpersona()
        })
      }
    }

  }
</script>

<style scoped>

</style>
