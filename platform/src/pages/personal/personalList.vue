<template>
  <div>
    <el-card class="box-card" style="margin-top: 0px;">
      <el-table :data="tableData" style="width: 100%" :show-overflow-tooltip="true" :height="580">
        <el-table-column
          type="index"
          label="序号"
          width="60"
        >
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column label="手机号码">
        </el-table-column>
        <el-table-column label="身份证号码">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">查看</el-button>
            <el-button type="success" size="mini">修改</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "personalList",
    data() {
      return {
        tableData: []
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>

</style>
