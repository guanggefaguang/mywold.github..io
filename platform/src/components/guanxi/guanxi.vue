<template>
  <div>

    <el-card class="box-card">
      <el-collapse @change="handleChange">
        <el-collapse-item title="股东(3)" name="1">
          <div v-for="items in gudong" class="int">
            {{items.name}}
          </div>
        </el-collapse-item>
        <el-collapse-item title="法定代表人" name="2">
          <div>{{this.tableData.legalPersonName}}</div>
        </el-collapse-item>
        <el-collapse-item title="对外投资人" name="3">
          <div v-for="items in duiwai" class="int">
            {{items.name}}
          </div>
        </el-collapse-item>
        <el-collapse-item title="董事/监事/高管" name="4">
          <div v-for="items in ren" class="int">
            <span v-for="sin in items.staffName">{{sin}}</span> {{items.name}}
          </div>
        </el-collapse-item>
      </el-collapse>

    </el-card>
  </div>
</template>

<script>
  import {getDatat18, getDatat54} from "../../api/api";

  let echarts = require('echarts')
  export default {
    name: "guanxi",
    data() {
      return {
        tableData: {},
        gudong: [],
        ren: [],
        duiwai: [],
        names: [],
        nums: [],
        cat: 0,
        lineNum: 1,
        s_name: 0,
        dialogTableVisible: false
      }
    },
    mounted() {
      this.getGuanXi()
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      getGuanXi() {
        let params = {
          entname: `${localStorage.getItem('name')}`,
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getDatat18(params).then((res) => {
          this.tableData = JSON.parse(res.data.data).baseInfo
          this.gudong = JSON.parse(res.data.data).investorList
          this.ren = JSON.parse(res.data.data).staffList
          this.duiwai = JSON.parse(res.data.data).investList
        })
      },

    }

  }
</script>

<style scoped>
  .int {
    font-size: 12px;
    margin-top: 10px;
  }
</style>
