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
        <el-table-column prop="AppDate" label="申请日期" width="180">
        </el-table-column>
        <el-table-column label="商标" width="200">
          <template slot-scope="scope">
            <img :src="scope.row.ImageUrl" style="width: 100px;"/>
          </template>
        </el-table-column>
        <el-table-column prop="Name" label="商标名称">
        </el-table-column>
        <el-table-column prop="RegNo" label="注册号">
        </el-table-column>
        <el-table-column prop="FlowStatusDesc" label="状态" :show-overflow-tooltip="true" width="300">
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="parseInt(this.total)"
        @current-change="changePum"
        :page-size="30"
        :prev-click="changePum"
        :next-click="changePum"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  import {getInformationq43} from "../../api/api";

  export default {
    name: "shangbiao",
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
      this.getShangBiao()
    },
    methods: {
      changePum(val) {
        this.params.pagenum = val
        this.getShangBiao()
      },
      getShangBiao() {
        getInformationq43(this.params).then((res) => {
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
