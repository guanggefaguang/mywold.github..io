<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" :show-overflow-tooltip="true" :height="500">
        <el-table-column prop="putDate" label="列入日期">
        </el-table-column>
        <el-table-column prop="putReason" label="列入原因">
        </el-table-column>
        <el-table-column prop="putDepartment" label="决定机关">
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="parseInt(this.total)"
        @current-change="changePum"
        :page-size="20"
        :prev-click="changePum"
        :next-click="changePum"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  import {getDatat48} from "../../api/api";

  export default {
    name: "zhongda",
    data() {
      return {
        tableData: [],
        length: '',
        params: {
          pagenum: 1,
          entname: `${localStorage.getItem('name')}`,
          droseakey: `${localStorage.getItem('droseakey')}`
        },
        total: ''
      }
    },
    mounted() {
      this.getZhongDa()
    },
    methods: {
      changePum(val) {
        this.params.pagenum = val
        this.getZhongDa()
      },
      getZhongDa() {
        getDatat48(this.params).then((res) => {
          if (res.data.data !== null) {
            let sin = JSON.parse(res.data.data).items
            this.tableData = sin
            if (sin.length > 0) {
              this.total = JSON.parse(res.data.data).total
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
