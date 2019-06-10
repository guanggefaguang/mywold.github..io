<template>
  <div>
    <el-card class="box-card">
      <!--<div slot="header" class="clearfix">-->
      <!--<span style="font-weight: bold;">主要人员</span>-->
      <!--</div>-->
      <table style="width: 100%;height: 420px;font-size: 14px;" class="talw">
        <tbody>
        <tr>
          <td>社会统一信用码：</td>
          <td>{{this.tableData.creditCode}}</td>
          <td>注册号：</td>
          <td>{{this.tableData.regNumber}}</td>
        </tr>
        <tr>
          <td>组织机构代码：</td>
          <td>{{this.tableData.orgNumber}}</td>
          <td>经营状态：</td>
          <td>{{this.tableData.regStatus}}</td>
        </tr>
        <tr>
          <td>公司类型：</td>
          <td>{{this.tableData.companyOrgType}}</td>
          <td>成立日期：</td>
          <td>{{this.tableData.estiblishTime}}</td>
        </tr>
        <tr>
          <td>法定代表人：</td>
          <td>{{this.tableData.legalPersonName}}</td>
          <td>注册资本：</td>
          <td>{{this.tableData.regCapital}}</td>
        </tr>
        <tr>
          <td>营业期限：</td>
          <td>{{this.tableData.fromTime}}-{{this.tableData.toTime}}</td>
          <td>登记机关：</td>
          <td>{{this.tableData.regInstitute}}</td>
        </tr>
        <tr>
          <td>发证日期：</td>
          <td>{{this.tableData.approvedTime}}</td>
          <td>公司规模：</td>
          <td>{{this.tableData.staffNumRange}}</td>
        </tr>
        <tr>
          <td>所属行业：</td>
          <td>{{this.tableData.industry}}</td>
          <td>曾用名：</td>
          <td>{{this.tableData.historyNames}}</td>
        </tr>
        <tr>
          <td>英文名：</td>
          <td>{{this.tableData.property3}}</td>
        </tr>
        <tr>
          <td>注册地址：</td>
          <td>{{this.tableData.regLocation}}</td>
        </tr>
        <tr>
          <td>经营范围：</td>
          <td rowspan="2" colspan="3">{{this.tableData.businessScope}}</td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </el-card>
  </div>
</template>

<script>
  import {getDatat18} from "../../api/api";

  export default {
    name: "dataname",
    data() {
      return {
        tableData: {}
      }
    },
    mounted() {
      this.getDataname()
    },
    methods: {
      getDataname() {
        let params = {
          entname: `${localStorage.getItem('name')}`,
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getDatat18(params).then((res) => {
          console.log(res.data)
          this.tableData = JSON.parse(res.data.data).baseInfo
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
  }

  .two {
    text-align: left;
  }

  .ren {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .talw tr td:first-child{
    /*background: red;*/
    font-weight: 600;
    width: 120px;
  }
  .talw tr td:nth-of-type(3){
    /*background: red;*/
    font-weight: 600;
    width: 120px;
  }
  .ren li {
    width: 50%;
    height: 30px;
    color: #333333;
    font-size: 14px;
    border-bottom: 1px solid #cccccc;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    line-height: 30px;
  }
</style>
