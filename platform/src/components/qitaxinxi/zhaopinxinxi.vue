<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" :show-overflow-tooltip="true" :height="500">
        <el-table-column prop="times" label="发布时间" width="180">
        </el-table-column>
        <el-table-column prop="description" label="招聘职位" width="300" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="oriSalary" label="薪资">
        </el-table-column>
        <el-table-column prop="experience" label="工作经验">
        </el-table-column>
        <el-table-column prop="employerNumber" label="招聘人数">
        </el-table-column>
        <el-table-column prop="district" label="所在城市">
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
  import {getDatat42} from "../../api/api";

  export default {
    name: "zhaopinxinxi",
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
      this.getZhaoPinXinXi()
    },
    methods: {
      changePum(val) {
        this.params.pagenum = val
        this.getZhaoPinXinXi()
      },
      getZhaoPinXinXi() {
        getDatat42(this.params).then((res) => {
          if (res.data.data !== null) {
            let sin = JSON.parse(res.data.data).items
            for (let i = 0; i < sin.length; i++) {
              sin[i].times = this.timestampToTime(sin[i].createTime)
            }
            this.tableData = sin
            if (sin.length > 0) {
              this.total = JSON.parse(res.data.data).total
              this.length = 1
            }
          }
        })
      },
      timestampToTime(timestamp) {
        var date = new Date(timestamp);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        return Y + M + D;
      }
    }
  }
</script>

<style scoped>

</style>
