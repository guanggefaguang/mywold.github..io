<template>
  <div>
    <el-tabs v-model="activeName2" @tab-click="handleClick" tab-position="left">
      <el-tab-pane label="法院失信被执行人" name="first" v-if="this.shixin == true">
        <shixin/>
      </el-tab-pane>
      <el-tab-pane label="手机三要素" name="third" v-if="this.shoujisan == true">
        <shoujisan/>
      </el-tab-pane>
      <el-tab-pane label="手机在网时长" name="fourth" v-if="this.shoujiwang == true">
        <shoujiwang/>
      </el-tab-pane>
      <el-tab-pane label="特殊名单核查" name="five" v-if="this.teshumingdan == true">
        <teshumingdan/>
      </el-tab-pane>
      <el-tab-pane label="多次申请核查" name="six" v-if="this.duocishenqing == true">
        <duocishenqing/>
      </el-tab-pane>
      <el-tab-pane label="个人信息关联" name="seven" v-if="this.gerenxinxi == true">
        <gerenxinxi/>
      </el-tab-pane>
      <el-tab-pane label="多平台负债信息" name="eight" v-if="this.fuzai == true">
        <fuzai/>
      </el-tab-pane>
      <el-tab-pane label="个人不良信息" name="nine" v-if="this.buliang == true">
        <buliang/>
      </el-tab-pane>
      <el-tab-pane label="航旅信息" name="ten" v-if="this.hanglv == true">
        <hanglv/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import shixin from '../../components/personal/shixin'
  import shoujisan from '../../components/personal/shoujisan'
  import shoujiwang from '../../components/personal/shoujiwang'
  import teshumingdan from '../../components/personal/teshumingdan'
  import duocishenqing from '../../components/personal/duocishenqing'
  import gerenxinxi from '../../components/personal/gerenxinxi'
  import fuzai from '../../components/personal/fuzai'
  import buliang from '../../components/personal/buliang'
  import hanglv from '../../components/personal/buliang'
  import {getpersonalinfo, getperinterlist} from '../../api/api'

  export default {
    name: "index",
    data() {
      return {
        activeName2: '',
        shixin: true,
        shoujisan: true,
        shoujiwang: true,
        teshumingdan: true,
        duocishenqing: true,
        gerenxinxi: true,
        fuzai: true,
        buliang: true,
        hanglv: true,
        tabPosition: "left"
      }
    },
    components: {
      shixin,
      shoujisan,
      shoujiwang,
      teshumingdan,
      duocishenqing,
      gerenxinxi,
      fuzai,
      buliang,
      hanglv
    },
    mounted() {
      // this.getallPer()
      // this.getpersona()
    },
    methods: {
      handleClick(val) {
        console.log(val)
      },
      getpersona() {
        let params = {
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getpersonalinfo(params).then((res) => {
          let arr = res.data.data.intids.split(',')
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 1603) {
              this.shixin = true
            } else if (arr[i] == '1607') {
              this.shoujisan = true
              console.log(this.shoujisan)
            } else if (arr[i] == 1609) {
              this.shoujiwang = true
            } else if (arr[i] == 1601) {
              this.teshumingdan = true
            } else if (arr[i] == 1602) {
              this.duocishenqing = true
            } else if (arr[i] == 1604) {
              this.gerenxinxi = true
            } else if (arr[i] == 1605) {
              this.fuzai = true
            } else if (arr[i] == 1606) {
              this.buliang = true
            } else if (arr[i] == 1608) {
              this.hanglv = true
            }
          }
        })
      },
      getallPer() {
        let params = {
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getperinterlist(params).then((res) => {
          console.log(res.data)
        })
      }
    }
  }
</script>

<style scoped>

</style>
