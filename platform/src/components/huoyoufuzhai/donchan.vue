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
        <el-table-column prop="baseInfo.regDate" label="登记日期" width="180">
        </el-table-column>
        <el-table-column prop="baseInfo.regNum" label="登记号">
        </el-table-column>
        <el-table-column prop="baseInfo.regDepartment" label="登记机关">
        </el-table-column>
        <el-table-column prop="baseInfo.status" label="状态">
        </el-table-column>
        <el-table-column prop="baseInfo.overviewAmount" label="被担保债权数额">
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
  import {getDatat57} from "../../api/api";

  export default {
    name: "donchan",
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
      this.getDonChan()
    },
    methods: {
      changePum(val) {
        this.params.pagenum = val
        this.getDonChan()
      },
      getDonChan() {
        getDatat57(this.params).then((res) => {
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
