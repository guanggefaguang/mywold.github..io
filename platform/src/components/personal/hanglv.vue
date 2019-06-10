<template>

</template>

<script>
  import {getBairon} from "../../api/api";

  export default {
    name: "hanglv",
    data() {
      return {
        params: {
          intCode: `AirTravel_h1`,
          intUserproperty: {"id": "513124198808241024", "cell": "15903540990", "name": "张三"},
          droseakey: `8fa4d9fac0844625b155d088899ad07b`
        }
      }
    },
    mounted() {
      this.getHanglv()
    },
    methods: {
      getHanglv() {
        getBairon(this.params).then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
