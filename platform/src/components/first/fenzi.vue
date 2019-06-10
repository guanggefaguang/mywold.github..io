<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>分资机构</span>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="企业名称" :show-overflow-tooltip="true" width="350">
        </el-table-column>
        <el-table-column prop="" label="法定代表人" width="180">
        </el-table-column>
        <el-table-column prop="" label="状态">
        </el-table-column>
        <el-table-column prop="" label="注册时间">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  import {getDatat18} from "../../api/api";

  export default {
    name: "fenzi",
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      this.getFenZi()
    },
    methods: {
      getFenZi() {
        let params = {
          entname: `${localStorage.getItem('name')}`,
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getDatat18(params).then((res) => {
          if (res.data.data !== null) {
            let sin = JSON.parse(res.data.data).branchList
            this.tableData = sin
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
