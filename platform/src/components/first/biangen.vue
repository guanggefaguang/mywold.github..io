<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: bold;">变更记录</span>
      </div>
      <el-table :data="tableData" style="width: 100%" :show-overflow-tooltip="true":height="550">
        <el-table-column prop="createtime" label="变更时间">
        </el-table-column>
        <el-table-column prop="changeItem" label="变更项目">
        </el-table-column>
        <el-table-column prop="contentBefore" label="变更前" width="400" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="contentAfter" label="变更后" width="400" :show-overflow-tooltip="true">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  import {getDatat64} from "../../api/api";

  export default {
    name: "biangen",
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      this.getBianGen()
    },
    methods: {
      getBianGen() {
        let params = {
          entname: `${localStorage.getItem('name')}`,
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getDatat64(params).then((res) => {
          if (res.data.data !== null) {
            let sin = JSON.parse(res.data.data).items
            this.tableData = sin
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
