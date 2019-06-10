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
        <el-table-column prop="Anno" label="编号" width="180">
        </el-table-column>
        <el-table-column label="立案时间">
          <template slot-scope="scope">
            {{scope.row.Liandate.substring(0,10)}}
          </template>
        </el-table-column>
        <el-table-column prop="ExecuteGov" label="执行法院">
        </el-table-column>
        <el-table-column prop="Biaodi" label="执行标的">
        </el-table-column>
        <el-table-column prop="Status" label="案件状态">
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
  import {getInformationq53} from "../../api/api";

  export default {
    name: "beizhixing",
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
      this.getBeiZhiXing()
    },
    methods: {
      changePum(val) {
        this.params.pagenum = val
        this.getBeiZhiXing()
      },
      getBeiZhiXing() {
        getInformationq53(this.params).then((res) => {
          if (res.data.data !== null) {
            console.log(res.data.data)
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
