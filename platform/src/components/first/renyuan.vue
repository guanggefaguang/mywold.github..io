<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: bold;">主要人员</span>
      </div>
      <ul class="ren">
        <li v-for="item in this.tableData">
          <div class="one"><span v-for="name in item.staffName">{{name}}</span></div>
          <div class="two">{{item.name}}</div>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
  import {getDatat18} from "../../api/api";

  export default {
    name: "renyuan",
    data() {
      return {
        mingzi: '孙兴隆',
        tableData: []
      }
    },
    mounted() {
      this.getRenYuan()
    },
    methods: {
      getRenYuan() {
        let params = {
          entname: `${localStorage.getItem('name')}`,
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getDatat18(params).then((res) => {
          if (res.data.data !== null) {
            let sin = JSON.parse(res.data.data).staffList
            this.tableData = sin
          }
        })
      }
    }
  }
</script>

<style scoped>
  .one {
    min-width: 100px;
    /*background: #409EFF;*/
    /*color: #ffffff;*/
    text-align: left;
    padding-left: 20px;
    font-weight: 600;
  }

  .two {
    text-align: left;
  }

  .ren {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .ren li {
    float: left;
    width: 50%;
    height: 30px;
    color: #333333;
    font-size: 14px;
    border-bottom: 1px solid #ebeef5;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    line-height: 30px;
  }
</style>
