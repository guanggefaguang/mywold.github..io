<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>对外投资</span>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="被投资企业名称" width="200" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="legalPersonName" label="被投资法人代表">
        </el-table-column>
        <el-table-column prop="regCapital" label="注册资本">
        </el-table-column>
        <el-table-column label="投资数额">
          <template slot-scope="scope">
            {{scope.row.amount}}万元
          </template>
        </el-table-column>
        <el-table-column prop="percent" label="投资占比">
        </el-table-column>
        <el-table-column prop="times" label="注册时间">
        </el-table-column>
        <el-table-column prop="regStatus" label="状态" :show-overflow-tooltip="true" width="200">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  import {getDatat18} from "../../api/api";

  export default {
    name: "duiwai",
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      this.getDuiWai()
    },
    methods: {
      getDuiWai() {
        let params = {
          entname: `${localStorage.getItem('name')}`,
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getDatat18(params).then((res) => {
          if (res.data.data !== null) {
            let sin = JSON.parse(res.data.data).investList
            for (let i = 0; i < sin.length; i++) {
              sin[i].times = this.timestampToTime(sin[i].estiblishTime)
            }
            this.tableData = sin
          }
        })
      },

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

</style>
