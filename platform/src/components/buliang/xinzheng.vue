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
        <el-table-column prop="punishNumber" label="文号" width="300" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="type" label="类型" :show-overflow-tooltip="true" width="300">
        </el-table-column>
        <el-table-column prop="departmentName" label="决定机关">
        </el-table-column>
        <el-table-column prop="decisionDate" label="决定日期">
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
  import {getDatat58} from "../../api/api";

  export default {
    name: "xinzheng",
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
      this.getXinZheng()
    },
    methods: {
      changePum(val) {
        this.params.pagenum = val
        this.getXinZheng()
      },
      getXinZheng() {
        getDatat58(this.params).then((res) => {
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
