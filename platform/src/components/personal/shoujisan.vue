<template>
  <el-card class="box-card">

  </el-card>
</template>

<script>
  import {getBairon} from "../../api/api";

  export default {
    name: "shoujisan",
    data() {
      return {
        params: {
          intCode: `TelCheck_s`,
          intUserproperty: {"id": "513124198808241024", "cell": "15903540990", "name": "张三"},
          droseakey: `8fa4d9fac0844625b155d088899ad07b`
        }
      }
    },
    mounted() {
      this.getShoujisan()
    },
    methods: {
      getShoujisan() {
        getBairon(this.params).then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
