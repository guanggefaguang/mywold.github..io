<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" :show-overflow-tooltip="true" :height="500">
        <el-table-column prop="examineDate" label="审核时间" width="180">
        </el-table-column>
        <el-table-column prop="webName" label="网站名称">
        </el-table-column>
        <el-table-column label="网站首页">
          <template slot-scope="scope">
            <a :href="scope.row.webSite">{{scope.row.webSite[0]}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="ym" label="域名">
        </el-table-column>
        <el-table-column prop="liscense" label="备案号">
        </el-table-column>
        <el-table-column prop="companyType" label="单位性质">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  import {getDatat32} from "../../api/api";

  export default {
    name: "icp",
    data() {
      return {
        tableData: [],
        length: ''
      }
    },
    mounted() {
      this.getIcp()
    },
    methods: {
      getIcp() {
        let params = {
          entname: `${localStorage.getItem('name')}`,
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getDatat32(params).then((res) => {
          if (res.data.data !== null) {
            let sin = JSON.parse(res.data.data)
            this.tableData = sin
            if (sin.length > 0) {
              this.length = 1
            }
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
