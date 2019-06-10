<template>
  <div>
    <el-card class="box-card" style="padding: 10px;">
      <div slot="header" class="clearfix">
        <span class="bold">企业信息采集设置</span>
        <el-button style="float: right;padding: 5px 15px;" type="primary" @click="postSetting">保存</el-button>
      </div>
      <el-form label-width="100px">
        <el-form-item label="更新频率(天)">
          <el-input v-model="params.aliveday" placeholder="请输入内容" style="width: 220px;"></el-input>
        </el-form-item>
      </el-form>
      <div v-for="item in tableData" style="margin-top: 20px">
        <p style="font-weight: bold;">{{item.name.substring(3)}}</p>
        <el-checkbox-group
          v-model="checkedCities1" style="margin-top: 10px;">
          <el-checkbox v-for="sin in item.children" :label="sin.id.toString()" :key="sin.id">{{sin.name}}</el-checkbox>
        </el-checkbox-group>
      </div>
    </el-card>

    <!--<el-card class="box-card marin">-->
      <!--<div slot="header" class="clearfix">-->
        <!--<span class="bold">企业舆情设置</span>-->
        <!--<el-button style="float: right;padding: 5px 15px;" type="primary" @click="postYuQin">保存</el-button>-->
      <!--</div>-->
      <!--<el-form ref="form" :model="form" label-width="80px">-->
        <!--<el-form-item label="开始时间">-->
          <!--<el-date-picker-->
            <!--v-model="form.begindate"-->
            <!--type="date"-->
            <!--value-format="yyyy-MM-dd"-->
            <!--placeholder="选择日期">-->
          <!--</el-date-picker>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="监控月数">-->
          <!--<el-input v-model="form.months" placeholder="月" style="width: 220px;"></el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
    <!--</el-card>-->

    <!--<el-card class="box-card marin">-->
      <!--<div slot="header" class="clearfix">-->
        <!--<span class="bold">企业</span>-->
        <!--<el-button style="float: right;padding: 5px 15px;" type="primary" @click="postQiya">保存</el-button>-->
      <!--</div>-->
      <!--<el-form ref="form" :model="qyform" label-width="100px">-->
        <!--<el-form-item label="开始时间">-->
          <!--<el-date-picker-->
            <!--v-model="qyform.begindate"-->
            <!--type="date"-->
            <!--value-format="yyyy-MM-dd"-->
            <!--placeholder="选择日期">-->
          <!--</el-date-picker>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="结束时间">-->
          <!--<el-date-picker-->
            <!--v-model="qyform.enddate"-->
            <!--type="date"-->
            <!--value-format="yyyy-MM-dd"-->
            <!--placeholder="选择日期">-->
          <!--</el-date-picker>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="更新频率(天)">-->
          <!--<el-input v-model="qyform.aliveday" placeholder="天" style="width: 220px;"></el-input>-->
        <!--</el-form-item>-->

      <!--</el-form>-->
    <!--</el-card>-->
  </div>
</template>

<script>
  import {
    getSetting,
    postAddBaseInfo,
    getAddBase,
    postAddData,
    getAddNews,
    postAddNews,
    getAddData
  } from "../../api/api";

  export default {
    name: "addsetting",
    data() {
      return {
        checkedCities1: [],
        tableData: [],
        params: {
          aliveday: '',
          intids: [],
          droseakey: `${localStorage.getItem('droseakey')}`
        },
        form: {
          droseakey: `${localStorage.getItem('droseakey')}`,
          months: '',
          begindate: ''
        },
        qyform: {
          droseakey: `${localStorage.getItem('droseakey')}`,
          begindate: '',
          enddate: '',
          aliveday: ''
        },
        value1: '',
        post: {
          droseakey: `${localStorage.getItem('droseakey')}`
        }
      }
    },
    mounted() {
      this.getallSetting()
      this.getChange()
      // this.getQiya()
      // this.getYuQin()
    },
    methods: {
      change() {
        this.params.intids = this.checkedCities1.join(',')
      },
      postSetting() {
        postAddBaseInfo(this.params).then((res) => {
          console.log(res)
          this.getChange()
        })
      },
      getChange() {
        getAddBase(this.post).then((res) => {
          this.$nextTick(() => {
            this.checkedCities1 = res.data.data.intids.split(',')
            this.params.aliveday = res.data.data.aliveday
          })
        })
      },
      //获取全部选项
      getallSetting() {
        getSetting(this.post).then((res) => {
          console.log(res)
          this.tableData = res.data.data
        })
      },
      //舆情部分
      // postYuQin() {
      //   console.log(this.form)
      //   postAddData(this.form).then((res) => {
      //     this.getYuQin()
      //   })
      // },
      // getYuQin() {
      //   getAddData(this.post).then((res) => {
      //     this.form.months = res.data.data.months
      //     this.form.begindate = this.timestampToTime(res.data.data.begindate)
      //   })
      // },
      //设置企业部分
      // postQiya() {
      //   postAddNews(this.qyform).then((res) => {
      //     this.getQiya()
      //   })
      // },
      //获取设置企业
      // getQiya() {
      //   getAddNews(this.post).then((res) => {
      //     this.qyform = res.data.data;
      //     this.qyform.begindate = this.timestampToTime(res.data.data.begindate)
      //     this.qyform.enddate = this.timestampToTime(res.data.data.enddate)
      //   })
      // },
      timestampToTime(timestamp) {
        var date = new Date(timestamp);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        return Y + M + D;
      }
    }
  }
</script>

<style scoped>
  .marin {
    margin-top: 20px;
  }
  .bold{
    font-weight: 600;
  }
</style>
