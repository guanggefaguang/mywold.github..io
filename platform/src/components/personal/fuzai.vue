<template>
  <el-card class="box-card" shadow="hover">
    <div slot="header" class="clearfix">
      <span>股东信息</span>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        width="100"
      >
      </el-table-column>
      <el-table-column prop="caseSource" label="案件来源">
      </el-table-column>
      <el-table-column prop="caseTime" label="发案时间">
        <template slot-scope="scope">

        </template>
      </el-table-column>
      <el-table-column prop="caseType" label="案件类别">
      </el-table-column>
      <el-table-column prop="checkCode" label="核验代码">
      </el-table-column>
      <el-table-column prop="checkMsg" label="核验代码描述">
      </el-table-column>

    </el-table>
  </el-card>
</template>

<script>
  import {getBairon} from "../../api/api";

  export default {
    name: "fuzai",
    data() {
      return {
        params: {
          intCode: `TotalDebt`,
          intUserproperty: {"id": "513124198808241024", "cell": "15903540990", "name": "张三"},
          droseakey: `8fa4d9fac0844625b155d088899ad07b`
        },
        tableData: []
      }
    },
    mounted() {
      this.getFuzai()
    },
    methods: {
      getFuzai() {
        getBairon(this.params).then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
