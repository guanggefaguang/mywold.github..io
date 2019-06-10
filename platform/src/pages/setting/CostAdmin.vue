<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <!--<span>监控明细</span>-->
        <el-select v-model="value" placeholder="请选择监控公司" @change="change">
          <el-option
            v-for="item in options"
            :key="item.droseakey"
            :label="item.orgname"
            :value="item.droseakey">
          </el-option>
        </el-select>
      </div>

      <el-table :data="tableData" style="width: 100%;height: 450px;">
        <el-table-column
          type="index"
          label="序号"
          width="100"
        >
        </el-table-column>
        <el-table-column prop="orgname" label="机构名称">
        </el-table-column>
        <el-table-column prop="intName" label="接口名称">
          <template slot-scope="scope">

          </template>
        </el-table-column>
        <el-table-column prop="intType" label="接口类型">
        </el-table-column>
        <el-table-column prop="price" label="调用费用">
        </el-table-column>
        <el-table-column prop="createtime" label="调用时间">
        </el-table-column>
        <el-table-column prop="username" label="调用用户">
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
  import {getfeedetail, getorgchildren} from "../../api/api";

  export default {
    name: "CostAdmin",
    data() {
      return {
        tableData: [],
        params: {
          droseakey: `${localStorage.getItem('droseakey')}`,
          int_type: '',
          page: 1,
          rows: 10
        },
        options: [],
        value: '',
        total: ''
      }
    },
    mounted() {
      this.getAdmin()
      this.getAllChild()
    },
    methods: {
      getAdmin() {
        getfeedetail(this.params).then((res) => {
          this.tableData = res.data.data.rows
          this.total = res.data.data.totalInfo.totalnum
        })
      },
      changePum(val) {
        this.params.page = val
        this.getAdmin()
      },
      getAllChild() {
        let params = {
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getorgchildren(params).then((res) => {
          console.log(res.data)
          this.options = res.data.data
        })
      },
      change(val) {
        console.log(val)
        this.params.droseakey = val
        this.getAdmin()
      }
    }
  }
</script>

<style scoped>

</style>
