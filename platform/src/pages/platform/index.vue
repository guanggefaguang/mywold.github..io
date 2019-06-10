<template>
  <div style="padding: 0px;">

    <el-tabs type="border" @tab-click="handleClick" v-model="activeName" ref="tabs" tab-position="left">
      <!--工商信息-->
      <el-tab-pane name="first">
        <span slot="label"><el-badge is-dot class="mycond"
                                     :hidden="true">工商信息</el-badge></span>
        <div class="out">
          <DataName v-if="DataName"/>
          <renYuan v-if="renYuan"/>
          <bianGen v-if="bianGen"/>
          <duiWai v-if="duiWai"/>
          <fenZi v-if="fenZi"/>
          <guDong v-if="guDong"/>
        </div>
      </el-tab-pane>
      <!--工商信息-->


      <!--关系网络-->
      <el-tab-pane name="second">
        <span slot="label"><el-badge is-dot class="mycond" hidden>关系网络</el-badge></span>
        <el-tabs v-model="activeName1" @tab-click="handleClick" type="card">
          <el-tab-pane>
            <span slot="label"><el-badge is-dot class="mycond">关系</el-badge></span>
            <div class="out">
              <guanXi/>
            </div>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><el-badge is-dot class="mycond">关系图谱</el-badge></span>
            <div class="out">
              <tupu/>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <!--关系网络-->


      <!--不良信息-->
      <el-tab-pane name="third" v-if="third">
        <span slot="label"><el-badge is-dot class="mycond">不良信息</el-badge></span>
        <div class="out">
          <el-tabs v-model="activeName1" @tab-click="handleClick" type="card">
            <el-tab-pane name="shixing" v-if="shixing">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="this.shixingOf">失信被执行人</el-badge></span>
              <shixin ref="shixing"/>
            </el-tab-pane>
            <el-tab-pane label="被执行人" name="beizhixing" v-if="beizhixing">
              <span slot="label"><el-badge is-dot class="mycond" :hidden='this.beizhixingOf'>被执行人</el-badge></span>
              <beizhixing ref="beizhixing"/>
            </el-tab-pane>
            <el-tab-pane name="gonggao" v-if="gonggao">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="this.gonggaoOf">法院公告</el-badge></span>
              <gonggao ref="gonggao"/>
            </el-tab-pane>
            <el-tab-pane name="falvsusong" v-if="falvsusong">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="this.falvsusongOf">法律诉讼</el-badge></span>
              <falvsusong ref="falvsusong"/>
            </el-tab-pane>
            <el-tab-pane name="zhongda" v-if="zhongda">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="this.zhongdaOf">重大违规</el-badge></span>
              <zhongda ref="zhongda"/>
            </el-tab-pane>
            <el-tab-pane name="xinzheng" v-if="xinzheng">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="this.xinzhengOf">行政处罚</el-badge></span>
              <xinzheng ref="xinzheng"/>
            </el-tab-pane>
            <el-tab-pane name="choucha" v-if="choucha">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="this.chouchaOf">抽查检查</el-badge></span>
              <choucha ref="choucha"/>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
      <!--不良信息-->

      <!--企业资产-->
      <el-tab-pane name="fourth" v-if="fourth">
        <span slot="label"><el-badge is-dot class="mycond">企业资产</el-badge></span>
        <div class="out">
          <el-tabs v-model="activeName2" @tab-click="handleClick" type="card">
            <el-tab-pane name="zaijuan" v-if="zaijuan">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="this.zaijuanOf">债券</el-badge></span>
              <zaijuan ref="zaijuan"/>
            </el-tab-pane>
            <el-tab-pane name="shangbiao" v-if="shangbiao">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="this.shangbiaoOf">商标</el-badge></span>
              <shangbiao ref="shangbiao"/>
            </el-tab-pane>
            <el-tab-pane name="zhuangli" v-if="zhuangli">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="this.zhuangliOf">专利</el-badge></span>
              <zhuangli ref="zhuangli"/>
            </el-tab-pane>
            <el-tab-pane name="zhuzuoquan" v-if="zhuzuoquan">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="this.zhuzuoquanOf">著作权</el-badge></span>
              <zhuzuoquan ref="zhuzuoquan"/>
            </el-tab-pane>
            <el-tab-pane name="icp" v-if="icp">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="this.icpOf">ICP备案</el-badge></span>
              <icp ref="icp"/>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
      <!--企业资产-->

      <!--或有负债-->
      <el-tab-pane name="five" v-if="five">
        <span slot="label"><el-badge is-dot class="mycond">或有负债</el-badge></span>
        <div class="out">
          <el-tabs v-model="activeName3" @tab-click="handleClick" type="card">
            <el-tab-pane name="donchan" v-if="donchan">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="donchanOf">动产抵押</el-badge></span>
              <donchan ref="donchan"/>
            </el-tab-pane>
            <el-tab-pane name="guquan" v-if="guquan">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="guquanOf">股权出质</el-badge></span>
              <guquan ref="guquan"/>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
      <!--或有负债-->

      <!--其他信息-->
      <el-tab-pane name="six" v-if="six">
        <span slot="label"><el-badge is-dot class="mycond">其他信息</el-badge></span>
        <div class="out">
          <el-tabs v-model="activeName4" @tab-click="handleClick" type="card">
            <el-tab-pane name="zhaotoubiao" v-if="zhaotoubiao">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="this.zhaotoubiaoOf">招投标</el-badge></span>
              <zhaotoubiao ref="zhaotoubiao"/>
            </el-tab-pane>
            <el-tab-pane name="zhaopinxinxi" v-if="zhaopinxinxi">
              <span slot="label"><el-badge is-dot class="mycond" :hidden="this.zhaopinxinxiOf">招聘信息</el-badge></span>
              <zhaopinxinxi ref="zhaopinxinxi"/>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
      <!--其他信息-->

      <!--个人征信-->
      <!--<el-tab-pane name="seven">-->
      <!--<span slot="label"><el-badge is-dot class="mycond">个人征信</el-badge></span>-->
      <!--<luru/>-->
      <!--</el-tab-pane>-->
      <!--个人征信-->
      <el-tab-pane name="seven" v-if="YuOf">
        <span slot="label"><el-badge is-dot class="mycond">舆情推送</el-badge></span>
        <div class="out">
          <News/>
        </div>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  import bianGen from '../../components/first/biangen'
  import duiWai from '../../components/first/duiwai'
  import fenZi from '../../components/first/fenzi'
  import guDong from '../../components/first/gudong'
  import renYuan from '../../components/first/renyuan'
  import DataName from '../../components/first/dataname'
  //关系网络
  import guanXi from '../../components/guanxi/guanxi'
  import tupu from '../../components/guanxi/tupu'
  //不良信息
  import shixin from '../../components/buliang/shixin'
  import beizhixing from '../../components/buliang/beizhixing'
  import gonggao from '../../components/buliang/gonggao'
  import falvsusong from '../../components/buliang/falvsusong'
  import zhongda from '../../components/buliang/zhongda'
  import xinzheng from '../../components/buliang/xinzheng'
  import choucha from '../../components/buliang/choucha'
  //企业资产
  import zaijuan from '../../components/qiyezhican/zaijuan'
  import shangbiao from '../../components/qiyezhican/shangbiao'
  import zhuangli from '../../components/qiyezhican/zhuanli'
  import zhuzuoquan from '../../components/qiyezhican/zhuzuoquan'
  import icp from '../../components/qiyezhican/icp'
  //或有负债
  import donchan from '../../components/huoyoufuzhai/donchan'
  import guquan from '../../components/huoyoufuzhai/guquan'
  //其他信息
  import zhaotoubiao from '../../components/qitaxinxi/zhaotoubiao'
  import zhaopinxinxi from '../../components/qitaxinxi/zhaopinxinxi'
  //个人征信
  import luru from '../../components/gerenzhengxin/luru'
  import {getAddBase, getOfData} from "../../api/api";
  //舆情推送
  import News from './news'

  export default {
    name: "index",
    components: {
      DataName,
      bianGen,
      duiWai,
      fenZi,
      guDong,
      renYuan,
      guanXi,
      tupu,
      shixin,
      beizhixing,
      gonggao,
      falvsusong,
      zhongda,
      xinzheng,
      choucha,
      zaijuan,
      shangbiao,
      zhuangli,
      zhuzuoquan,
      icp,
      donchan,
      guquan,
      zhaotoubiao,
      zhaopinxinxi,
      luru,
      News
    },
    data() {
      return {
        in: false,
        activeName: 'first',
        activeName1: 'shixing',
        activeName2: 'zaijuan',
        activeName3: 'donchan',
        activeName4: 'zhaotoubiao',
        params: {
          droseakey: `${localStorage.getItem('droseakey')}`
        },
        key: [],
        DataName: false,
        guDong: false,
        renYuan: false,
        duiWai: false,
        fenZi: false,
        bianGen: false,
        shixing: false,
        beizhixing: false,
        gonggao: false,
        falvsusong: false,
        zhongda: false,
        xinzheng: false,
        choucha: false,
        zaijuan: false,
        shangbiao: false,
        zhuangli: false,
        zhuzuoquan: false,
        icp: false,
        donchan: false,
        guquan: false,
        zhaotoubiao: false,
        zhaopinxinxi: false,
        third: false,
        fourth: false,
        five: false,
        six: false,
        //显示红点部分
        beizhixingOf: true,
        falvsusongOf: true,
        chouchaOf: true,
        shixingOf: true,
        gonggaoOf: true,
        zhongdaOf: true,
        xinzhengOf: true,
        zaijuanOf: true,
        shangbiaoOf: true,
        zhuangliOf: true,
        zhuzuoquanOf: true,
        icpOf: true,
        zhaotoubiaoOf: true,
        zhaopinxinxiOf: true,
        donchanOf: true,
        guquanOf: true,
        //控制舆情
        YuOf: true
      }
    },
    mounted() {
      this.getall()
      this.getChange()
      this.getOf()
    },
    updated() {

      //通过refs组件传值，来判断组件是否有数据， 显示红点。
      this.$nextTick(() => {
        //当组件 v-if为false时，下面的refs 会报错。 需要多加入一层判断。 length是组件中传递的值。无实际意义。 可在组件中修改
        if (this.$refs.beizhixing !== undefined) {
          if (this.$refs.beizhixing.length == 1) {
            this.beizhixingOf = false
          }
        }

        if (this.$refs.falvsusong !== undefined) {
          if (this.$refs.falvsusong.length == 1) {
            this.falvsusongOf = false
          }
        }

        if (this.$refs.choucha !== undefined) {
          if (this.$refs.choucha.length == 1) {
            this.chouchaOf = false
          }
        }

        if (this.$refs.shixing !== undefined) {
          if (this.$refs.shixing.length == 1) {
            this.shixingOf = false
          }
        }

        if (this.$refs.gonggao !== undefined) {
          if (this.$refs.gonggao.length == 1) {
            this.gonggaoOf = false
          }
        }

        if (this.$refs.zhongda !== undefined) {
          if (this.$refs.zhongda.length == 1) {
            this.zhongdaOf = false
          }
        }

        if (this.$refs.xinzheng !== undefined) {
          if (this.$refs.xinzheng.length == 1) {
            this.xinzhengOf = false
          }
        }

        if (this.$refs.zaijuan !== undefined) {
          if (this.$refs.zaijuan.length == 1) {
            this.zaijuanOf = false
          }
        }

        if (this.$refs.shangbiao !== undefined) {
          if (this.$refs.shangbiao.length == 1) {
            this.shangbiaoOf = false
          }
        }

        if (this.$refs.zhuangli !== undefined) {
          if (this.$refs.zhuangli.length == 1) {
            this.zhuangliOf = false
          }
        }

        if (this.$refs.zhuzuoquan !== undefined) {
          if (this.$refs.zhuzuoquan.length == 1) {
            this.zhuzuoquanOf = false
          }
        }

        if (this.$refs.icp !== undefined) {
          if (this.$refs.icp.length == 1) {
            this.icpOf = false
          }
        }

        if (this.$refs.zhaotoubiao !== undefined) {
          if (this.$refs.zhaotoubiao.length == 1) {
            this.zhaotoubiaoOf = false
          }
        }

        if (this.$refs.zhaopinxinxi !== undefined) {
          if (this.$refs.zhaopinxinxi.length == 1) {
            this.zhaopinxinxiOf = false
          }
        }

        if (this.$refs.donchan !== undefined) {
          if (this.$refs.donchan.length == 1) {
            this.donchanOf = true
          }
        }

        if (this.$refs.guquan !== undefined) {
          if (this.$refs.guquan.length == 1) {
            this.guquanOf = true
          }
        }
      })
    },
    methods: {
      // 首次进入获取 name droseakey

      getall() {
        return new Promise((resolve, reject) => {
          localStorage.setItem('name', '东莞市华美乐建材超市有限公司')
          // localStorage.setItem('droseakey', '8fa4d9fac0844625b155d088899ad07b')
          if (localStorage.getItem('name') !== '' && localStorage.getItem('droseakey') !== '') {
            resolve()
          } else {
            reject()
          }
        })
      },
      handleClick(tab) {

      },
      getOf() {
        //所有接口请求参数都含有 name droseakey
        let params = {
          entname: `${localStorage.getItem('name')}`,
          droseakey: `${localStorage.getItem('droseakey')}`
        }
        getOfData(params).then((res) => {
          if (res.data.data == 0) {
            this.YuOf = false
          } else {
            this.YuOf = true
          }
        })
      },

      // 判断组件是否选中，显示隐藏
      getChange() {
        getAddBase(this.params).then((res) => {
          this.key = res.data.data.intids.split(',')
          for (let i = 0; i < this.key.length; i++) {
            if (this.key[i] == 1001) {
              this.DataName = true
            } else if (this.key[i] == 1002) {
              this.guDong = true
            } else if (this.key[i] == 1003) {
              this.renYuan = true
            } else if (this.key[i] == 1004) {
              this.duiWai = true
            } else if (this.key[i] == 1005) {
              this.fenZi = true
            } else if (this.key[i] == 1006) {
              this.bianGen = true
            } else if (this.key[i] == 1201) {
              this.shixing = true
            } else if (this.key[i] == 1202) {
              this.beizhixing = true
            } else if (this.key[i] == 1203) {
              this.gonggao = true
            } else if (this.key[i] == 1204) {
              this.falvsusong = true
            } else if (this.key[i] == 1205) {
              this.zhongda = true
            } else if (this.key[i] == 1206) {
              this.xinzheng = true
            } else if (this.key[i] == 1207) {
              this.choucha = true
            } else if (this.key[i] == 1301) {
              this.zaijuan = true
            } else if (this.key[i] == 1302) {
              this.shangbiao = true
            } else if (this.key[i] == 1303) {
              this.zhuangli = true
            } else if (this.key[i] == 1304) {
              this.zhuzuoquan = true
            } else if (this.key[i] == 1305) {
              this.icp = true
            } else if (this.key[i] == 1401) {
              this.donchan = true
            } else if (this.key[i] == 1402) {
              this.guquan = true
            } else if (this.key[i] == 1501) {
              this.zhaotoubiao = true
            } else if (this.key[i] == 1502) {
              this.zhaopinxinxi = true
            }
          }


          //判断是否有数据来显示导航红点
          if (this.shixing == false &&
            this.beizhixing == false &&
            this.gonggao == false &&
            this.falvsusong == false &&
            this.zhongda == false &&
            this.xinzheng == false &&
            this.choucha == false
          ) {
            this.third = false
          } else {
            this.third = true
          }
          if (
            this.zaijuan == false &&
            this.shangbiao == false &&
            this.zhuangli == false &&
            this.zhuzuoquan == false &&
            this.icp == false
          ) {
            this.fourth = false
          } else {
            this.fourth = true
          }
          if (
            this.donchan == false &&
            this.guquan == false
          ) {
            this.five = false
          } else {
            this.five = true
          }
          if (
            this.zhaotoubiao == false &&
            this.zhaopinxinxi == false
          ) {
            this.six = false
          } else {
            this.six = true
          }
        })
      }
    }
  }
</script>

<style scoped>
</style>
