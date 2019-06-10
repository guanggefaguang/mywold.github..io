<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" :show-overflow-tooltip="true" :height="480">
        <el-table-column
          type="index"
          label="序号"
          width="100"
        >
        </el-table-column>
        <el-table-column prop="times" label="日期" width="200">
        </el-table-column>
        <el-table-column prop="title" label="裁判文书" width="500" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="casetype" label="案件类型">
        </el-table-column>
        <el-table-column prop="caseno" label="案件号" :show-overflow-tooltip="true">
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="prev, pager, next"
        :total="parseInt(this.total)"
        @current-change="changePum"
        :page-size="13"
        :prev-click="changePum"
        :next-click="changePum"
      >
      </el-pagination>
    </el-card>

  </div>
</template>

<script>
  import {getDatat28} from "../../api/api";

  export default {
    name: "falvsusong",
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
      this.getSuSong()
    },
    methods: {
      changePum(val) {
        this.params.pagenum = val
        this.getSuSong()
      },
      getSuSong() {
        getDatat28(this.params).then((res) => {
          if (res.data.data !== null) {
            let Mon = JSON.parse(res.data.data)
            this.total = parseInt(Mon.total)
            for (let i = 0; i < Mon.items.length; i++) {
              let sin = parseInt(Mon.items[i].eventTime)
              Mon.items[i].times = this.timestampToTime(sin)
            }
            this.tableData = Mon.items
            if (Mon.items.length > 0) {
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
