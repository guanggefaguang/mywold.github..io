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
        <el-table-column prop="Uniqueno" label="编号" width="180">
        </el-table-column>
        <el-table-column prop="Publicdate" label="公布时间">
        </el-table-column>
        <el-table-column prop="Executegov" label="执行法院">
        </el-table-column>
        <el-table-column prop="Yiwu" label="法律生效文书确定的义务" width="300" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="Executestatus" label="履行情况">
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
  import {getInformationq55} from "../../api/api";

  export default {
    name: "shixin",
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
      this.getShiXin()
    },
    methods: {
      changePum(val) {
        this.params.pagenum = val
        this.getShiXin()
      },
      getShiXin() {
        getInformationq55(this.params).then((res) => {
          if (res.data.data !== null) {
            let sin = JSON.parse(res.data.data.context).ShiXinResult.Items
            this.tableData = sin
            if (sin.length > 0) {
              this.total = JSON.parse(res.data.data.paging).total.TotalRecords
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
