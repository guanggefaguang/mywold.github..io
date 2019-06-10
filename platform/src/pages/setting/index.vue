<template>
  <div>
    <el-container>
      <el-header v-bind:style="{background:this.bgColor}">
        <div class="index_left">
          <!--<img src="../../assets/logo.png"/>-->
          <p><i>DCP </i>大数据采集与监控预警平台</p>
        </div>


        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :background-color="this.bgColor"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1"><i class="el-icon-star-off"></i>首页</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-document"></i>添加监控</el-menu-item>
          <el-menu-item index="4"><i class="el-icon-tickets"></i>费用明细</el-menu-item>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-setting"></i>配置</template>
            <el-menu-item index="5-1">企业采集配置</el-menu-item>
            <!--<el-menu-item index="5-2">监控配置</el-menu-item>-->
            <el-menu-item index="5-3">个人采集配置</el-menu-item>
          </el-submenu>
          <!--<el-menu-item index="7"><i class="el-icon-news"></i>数据详情</el-menu-item>-->
          <el-menu-item index="6"><i class="el-icon-success"></i>SiRei</el-menu-item>

        </el-menu>

      </el-header>
      <el-main>
        <!--<el-breadcrumb separator="/">-->
          <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
          <!--<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>-->
          <!--<el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
          <!--<el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
        <!--</el-breadcrumb>-->

        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "index",
    data() {
      return {
        activeIndex: '1'
      }
    },
    computed: {
      ...mapGetters(['bgColor'])
    },
    mounted() {
      this.getall()
      if (localStorage.getItem('color') == null) {
        this.$store.dispatch('getColor', '#000')
      } else {
        this.$store.dispatch('getColor', localStorage.getItem('color'))
      }
    },
    methods: {
      //判断当前点击导航跳转。 判断数值可自定义
      handleSelect(key) {
        if (key == '5-1') {
          this.$router.push('/home/addsetting')
        } else if (key == '5-2') {

        } else if (key == '5-3') {
          this.$router.push('/home/personalSetting')
        }
        else if (key == '1') {
          this.$router.push('/home/index')
        } else if (key == '4') {
          this.$router.push('/home/Cost')
        } else if (key == '6') {
          this.$router.push('/home/user')
        } else if (key == '7') {
          this.$router.push('/home/search')
        } else if (key == '3') {
          this.$router.push('/home/addCompany')
          // this.$router.push('/home/CostAdmin')
        }
      },


      //这里将 name 存为定值
      getall() {
        localStorage.setItem('name', '东莞市华美乐建材超市有限公司')
        // localStorage.setItem('droseakey', '8fa4d9fac0844625b155d088899ad07b')
      },
    }
  }
</script>

<style scoped>
  .index_left {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-weight: bold;
    height: 100%;
    font-size: 18px;
    letter-spacing: 2px;
  }

  .index_left img {
    width: 50px;
    height: 50px;
    display: block;
  }

  .el-header, .el-footer {
    padding: 0px 20px;
    background-color: rgb(84, 92, 100);
    color: #333;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    padding: 10px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
