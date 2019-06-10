<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" show-overflow-tooltip="true">
        <el-table-column prop="date" label="序号" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="手机号码">
        </el-table-column>
        <el-table-column prop="address" label="身份证号码">
        </el-table-column>
        <el-table-column prop="address" label="操作">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "luru"
  }
</script>

<style scoped>

</style>
