<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" :show-overflow-tooltip="true" :height="500">
        <el-table-column
          type="index"
          label="序号"
          width="100"
        >
        </el-table-column>
        <el-table-column prop="publishTime" label="发行日期" width="180">
        </el-table-column>
        <el-table-column prop="bondName" label="债券名称">
        </el-table-column>
        <el-table-column prop="bondNum" label="债券代码">
        </el-table-column>
        <el-table-column prop="bondType" label="债券类型">
        </el-table-column>
        <el-table-column prop="publisherName" label="发行人">
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="parseInt(this.total)"
        @current-change="changePum"
        :page-size="10"
        :prev-click="changePum"
        :next-click="changePum"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  import {getDatat50} from "../../api/api";

  export default {
    name: "zaijuan",
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
      this.getZhaiQuan()
    },
    methods: {
      changePum(val) {
        this.params.pagenum = val
        this.getZhaiQuan()
      },
      getZhaiQuan() {
        getDatat50(this.params).then((res) => {
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
