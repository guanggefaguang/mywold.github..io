<template>
  <div>
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
        <el-table-column prop="name" label="股东名称">
        </el-table-column>
        <el-table-column prop="amount" label="认缴出资金额">
          <template slot-scope="scope">
            {{scope.row.amount}}万元
          </template>
        </el-table-column>
        <el-table-column label="认缴出资时间">
        </el-table-column>
        <el-table-column label="实缴出资金额">
          <template slot-scope="scope">
          </template>
        </el-table-column>
        <el-table-column label="实缴出资时间">
          <template slot-scope="scope">
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  import {getDatat18} from "../../api/api";

  export default {
    name: "gudong",
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      this.getGuDong()
    },
    methods: {
      getGuDong() {
        let params = {
          entname: `${localStorage.getItem('name')}`,
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getDatat18(params).then((res) => {
          if (res.data.data !== null) {
            let sin = JSON.parse(res.data.data).investorList
            this.tableData = sin
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
