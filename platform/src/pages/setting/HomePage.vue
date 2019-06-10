<template>
  <div>

    <div class="top">

      <!--<div class="top_left">-->
        <!--<div class="top_title">-->
          <!--<el-radio-group v-model="radio5" size="small">-->
            <!--<el-radio-button label="监控周报"></el-radio-button>-->
            <!--<el-radio-button label="监控月报"></el-radio-button>-->
          <!--</el-radio-group>-->
        <!--</div>-->
        <!--<div class="top_small" style="border-left: none;border-right: none;border-top: none;">-->
          <!--<div id="myChart"></div>-->
        <!--</div>-->
      <!--</div>-->
      <div class="top_center" style="width: 986px;">
        <p class="top_title">预警提示</p>
        <div class="top_small" style="border-left: none;border-right: none;">

        </div>
      </div>
      <div class="top_right">
        <p class="top_title">账户余额</p>
        <div class="top_small" id="money">
          135,245.78
          <!--<div class="Look">查看明细</div>-->
          <el-button type="primary">查看明细</el-button>
        </div>
      </div>

    </div>


    <div class="top">
      <div class="top_center" style="flex: 2;margin-left: 0;">
        <p class="top_title">采集分析</p>
        <div class="top_small" style="border-left: none;border-right: none;">
          <div id="right"></div>
        </div>
      </div>
      <div class="top_right">
        <p class="top_title">风险分布</p>
        <div class="top_small" style="border-left: none;border-right: none;">
          <div id="pie"></div>
        </div>
      </div>
    </div>


    <div class="top">
      <div class="top_center" style="flex: 2;margin-left: 0;">
        <p class="top_title">费用分析</p>
        <div class="top_small" style="border-left: none;border-right: none;">
          <div id="right2"></div>
        </div>
      </div>
      <div class="top_right">
        <p class="top_title">使用分布</p>
        <div class="top_small" style="border-left: none;border-right: none;">
          <div id="pie2"></div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  let echarts = require('echarts')
  //引入柱状图
  require('echarts/lib/chart/bar')
  //引入折线图
  require('echarts/lib/chart/line')
  //引入饼状图
  require('echarts/lib/chart/pie')
  //引入title提示框
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    name: "HomePage",
    data() {
      return {
        radio5: '监控周报'
      }
    },
    mounted() {
      // this.drawBar()
      this.drawLine()
      this.drawPie()
      this.drawLine2()
      this.drawPie2()
    },
    methods: {
      drawBar() {
        var myChart = echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          title: {},
          tooltip: {},
          xAxis: {
            data: ["舆情", "新闻", "信息"]
          },
          yAxis: {},
          series: [{
            name: '查询',
            type: 'bar',
            data: [5, 20, 36]
          }],
          grid: {
            top: 50,
            bottom: 30,
            left: 30,
            right: 20
          }
        })
      },
      drawPie() {
        var myChart = echarts.init(document.getElementById('pie'))
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['招聘信息', '著作权', 'ICP备案', '商标', '关系']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '70% 100%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '招聘信息'},
                {value: 310, name: '著作权'},
                {value: 234, name: 'ICP备案'},
                {value: 135, name: '商标'},
                {value: 1548, name: '关系'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              grid: {
                top: 100,
                bottom: 0,
                left: 30,
                right: 20
              }
            }
          ]
        })
      },

      drawPie2() {
        var myChart = echarts.init(document.getElementById('pie2'))
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['不良信息', '工商信息', '企业资产',]
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '70% 100%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '不良信息'},
                {value: 310, name: '工商信息'},
                {value: 234, name: '企业资产'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              grid: {
                top: 100,
                bottom: 0,
                left: 30,
                right: 20
              }
            }
          ]
        })
      },

      drawLine() {
        var myChart = echarts.init(document.getElementById('right'))
        myChart.setOption({
          xAxis: {
            type: 'category',
            data: ['4月', '5月', '6月', '7月']
          },
          tooltip: {},
          yAxis: {
            // type: 'value'
          },
          series: [{
            name: '查询',
            data: [1120, 932, 401, 934],
            type: 'line'
          }],
          grid: {
            top: 50,
            bottom: 30,
            left: 60,
            right: 20
          }
        })
      },
      drawLine2() {
        var myChart = echarts.init(document.getElementById('right2'))
        myChart.setOption({
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月']
          },
          tooltip: {},
          yAxis: {
            // type: 'value'
          },
          series: [{
            name: '查询',
            data: [200, 932, 101, 934],
            type: 'line'
          }],
          grid: {
            top: 50,
            bottom: 30,
            left: 60,
            right: 20
          }
        })
      },


    }
  }
</script>

<style scoped>
  #money {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    color: #409EFF;
    align-items: center;
    padding: 60px 0px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .Look {
    width: 100px;
    height: 30px;
    font-size: 14px;
    color: #cccccc;
    text-align: center;
    line-height: 30px;
    border: 1px solid #cccccc;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    font-weight: 100;
  }

  .top_title {
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
  }

  .top_left {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .top_center {
    display: flex;
    flex-direction: column;
    flex: 2;
    /*margin-left: 20px;*/
  }

  .top_right {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 20px;
  }

  .top_small {
    flex-grow: 1;
    border: 1px solid #cccccc;
  }

  #myChart {
    width: 100%;
    height: 250px;
  }

  #right {
    width: 100%;
    height: 250px;
  }

  #pie {
    width: 100%;
    height: 250px;
  }

  #right2 {
    width: 100%;
    height: 250px;
  }

  #pie2 {
    width: 100%;
    height: 250px;
  }

  .top {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;
  }


</style>
