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
        <el-table-column prop="KindCodeDesc" label="专利类型">
        </el-table-column>
        <el-table-column prop="PublicationNumber" label="申请号">
        </el-table-column>
        <el-table-column label="发布日期">
          <template slot-scope="scope">
            {{scope.row.LegalStatusDate.substring(0,10)}}
          </template>
        </el-table-column>
        <el-table-column prop="Abstract" width="300" label="摘要" :show-overflow-tooltip="true">
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
  import {getInformationq41} from "../../api/api";

  export default {
    name: "zhuanli",
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
      this.getZhuanLi()
    },
    methods: {
      changePum(val) {
        this.params.pagenum = val
        this.getZhuanLi()
      },
      getZhuanLi() {
        getInformationq41(this.params).then((res) => {
          if (res.data.data !== null) {
            let sin = JSON.parse(res.data.data.context)
            this.tableData = sin
            if (sin.length > 0) {
              this.total = JSON.parse(res.data.data.paging).TotalRecords
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
