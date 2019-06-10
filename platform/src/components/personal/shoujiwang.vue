<template>

</template>

<script>
  import {getBairon} from "../../api/api";

  export default {
    name: "shoujiwang",
    data() {
      return {
        params: {
          intCode: `TelPeriod`,
          intUserproperty: {"id": "513124198808241024", "cell": "15903540990", "name": "张三"},
          droseakey: `8fa4d9fac0844625b155d088899ad07b`
        }
      }
    },
    mounted() {
      this.getShoujiwang()
    },
    methods: {
      getShoujiwang() {
        getBairon(this.params).then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
