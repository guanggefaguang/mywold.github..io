<template>
  <el-card class="box-card" shadow="hover">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        width="100"
      >
      </el-table-column>
      <el-table-column prop="type" label="类型">
      </el-table-column>
      <el-table-column prop="caseTime" label="近7天">
        <template slot-scope="scope">

        </template>
      </el-table-column>
      <el-table-column prop="caseType" label="近15天">
      </el-table-column>
      <el-table-column prop="checkCode" label="近1月">
      </el-table-column>
      <el-table-column prop="checkMsg" label="近3月">
      </el-table-column>
      <el-table-column prop="checkMsg" label="近6月">
      </el-table-column>
      <el-table-column prop="checkMsg" label="近12月">
      </el-table-column>

    </el-table>
  </el-card>
</template>

<script>
  import {getBairon} from "../../api/api";

  export default {
    name: "duocishenqing",
    data() {
      return {
        params: {
          intCode: `ApplyLoanStr`,
          intUserproperty: {"id": "513124198808241024", "cell": "15903540990", "name": "张三"},
          droseakey: `8fa4d9fac0844625b155d088899ad07b`
        },
        tableData: [
          {type:'银行'},
          {type:'小贷'},
          {type:'P2P'},
          {type:'消费类分期'},
          {type:'现金类分期'},
          {type:'信用卡代偿'},
          {type:'非银其他'},
          {type:'本机构'}
        ]
      }
    },
    mounted() {
      this.getDuoci()
    },
    methods: {
      getDuoci() {
        getBairon(this.params).then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
