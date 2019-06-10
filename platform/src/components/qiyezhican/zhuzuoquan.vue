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
        <el-table-column prop="Name" label="作品名称" width="300" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="RegisterNo" label="登记号">
        </el-table-column>
        <el-table-column prop="PublishDate" label="发布日期">
        </el-table-column>
        <el-table-column prop="Category" label="登记类别">
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
  import {getInformationq62} from "../../api/api";

  export default {
    name: "zhuzuoquan",
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
      this.getZhuZuoQuan()
    },
    methods: {
      changePum(val) {
        this.params.pagenum = val
        this.getZhuZuoQuan()
      },
      getZhuZuoQuan() {
        getInformationq62(this.params).then((res) => {
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
