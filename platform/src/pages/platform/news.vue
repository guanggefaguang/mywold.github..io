<template>
  <div>

    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" :show-overflow-tooltip="true" :height="520">
        <el-table-column
          type="index"
          label="序号"
          width="60"
        >
        </el-table-column>
        <el-table-column prop="Title" label="标题" width="400" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="Source" label="来源" width="">
        </el-table-column>
        <el-table-column prop="PublishTime" label="发布日期">
        </el-table-column>
        <el-table-column label="操作" width="200" prop="Url">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="gohref(scope)">查看</el-button>
          </template>
        </el-table-column>

      </el-table>

      <el-pagination
        background
        layout="prev, pager, next"
        :total="parseInt(this.total)"
        @current-change="changePum"
        :page-size="11"
        :prev-click="changePum"
        :next-click="changePum"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  import {getInformationq34} from "../../api/api";

  export default {
    name: "news",
    data() {
      return {
        tableData: [],
        params: {
          pagenum: 1,
          entname: `${localStorage.getItem('name')}`,
          droseakey: `${localStorage.getItem('droseakey')}`
        },
        total: ''
      }
    },
    mounted() {
      this.getNews()
    },
    methods: {
      changePum(val) {
        this.params.pagenum = val
        this.getNews()
      },
      getNews() {
        getInformationq34(this.params).then((res) => {
          let sin = JSON.parse(res.data.data.context)
          this.tableData = sin
          this.total = JSON.parse(res.data.data.paging).TotalRecords
        })
      },
      gohref(to) {
        window.open(to.row.Url)
      }
    }
  }
</script>

<style scoped>
  .news {
    width: 100%;
    height: 550px;
    overflow: auto;
    margin-top: 30px;
  }

</style>
