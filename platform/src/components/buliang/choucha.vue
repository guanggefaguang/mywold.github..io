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
        <el-table-column prop="checkDate" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="checkType" label="类型">
        </el-table-column>
        <el-table-column prop="checkResult" label="结果">
        </el-table-column>
        <el-table-column prop="checkOrg" label="检查实施机关">
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
  import {getDatat59} from "../../api/api";

  export default {
    name: "choucha",
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
      this.getChouCha()
    },
    methods: {
      changePum(val) {
        this.params.pagenum = val
        this.getChouCha()
      },
      getChouCha() {
        getDatat59(this.params).then((res) => {
          if (res.data.data !== null) {
            let sin = JSON.parse(res.data.data)
            this.tableData = sin.items
            if (sin.items.length > 0) {
              this.total = JSON.parse(res.data.data).count
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
