<template>
  <div>
    <ul class="money">

      <li style="background: #f56c6c;" @click="goMoney">
        <i class="el-icon-info" style="font-size: 40px;"></i>
        <div>
          <p>￥3000</p>
          <p>已使用</p>
        </div>
      </li>
      <li style="background: #67c23a;">
        <i class="el-icon-info" style="font-size: 40px;"></i>
        <div>
          <p>￥7000</p>
          <p>可用余额</p>
        </div>
      </li>
      <li style="background: #409EFF;">
        <i class="el-icon-info" style="font-size: 40px;"></i>
        <div>
          <p>￥10000</p>
          <p>累计充值</p>
        </div>
      </li>
    </ul>


    <el-tabs :stretch="true">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 监控预警</span>
        <p class="test">收费标准：每查询一次收费4元</p>
        <el-date-picker
          v-model="value5"
          type="datetimerange"
          :picker-options="pickerOptions2"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right">
        </el-date-picker>

        <el-table :data="tableData" :show-overflow-tooltip="true">
          <el-table-column
            type="index"
            label="序号"
            width="100"
          >
          </el-table-column>
          <el-table-column prop="date" label="企业名称" width="180">
          </el-table-column>
          <el-table-column prop="name" label="开始日期">
          </el-table-column>
          <el-table-column prop="address" label="监控月数">
          </el-table-column>
          <el-table-column prop="address" label="收取费用">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 数据采集</span>
        <p class="test">收费标准：每查询一次收费4元</p>
        <el-date-picker
          v-model="value5"
          type="datetimerange"
          :picker-options="pickerOptions2"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right">
        </el-date-picker>

        <el-table :data="tableData1" :show-overflow-tooltip="true">
          <el-table-column
            type="index"
            label="序号"
            width="100"
          >
          </el-table-column>
          <el-table-column prop="orgname" label="机构名称">
          </el-table-column>
          <el-table-column prop="intName" label="接口名称">
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
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 舆情推送</span>
        <p class="test">收费标准：每查询一次收费4元</p>
        <el-date-picker
          v-model="value5"
          type="datetimerange"
          :picker-options="pickerOptions2"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right">
        </el-date-picker>

        <el-table :data="tableData2" :show-overflow-tooltip="true">
          <el-table-column
            type="index"
            label="序号"
            width="100"
          >
          </el-table-column>
          <el-table-column prop="date" label="企业名称" width="180">
          </el-table-column>
          <el-table-column prop="name" label="采集频率(天)">
          </el-table-column>
          <el-table-column prop="address" label="开始日期">
          </el-table-column>
          <el-table-column prop="address" label="收取费用">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import {getfeedetail} from '../../api/api'

  export default {
    name: "Cost",
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: '',
        params: {
          droseakey: `${localStorage.getItem('droseakey')}`,
          int_type: '',
          page: 1,
          rows: 10
        },
        tableData: [],
        tableData1: [],
        tableData2: [],
      }
    },
    mounted() {
      this.getAdmin()
    },
    methods: {
      goMoney() {
        // this.$router.push('/home/Money')
      },
      getAdmin() {
        getfeedetail(this.params).then((res) => {
          console.log(res)
          this.tableData1 = res.data.data.rows
        })
      }
    }
  }
</script>

<style scoped>
  .test {
    margin: 10px auto;
    font-size: 14px;
    color: red;
    font-weight: bold;
  }

  .money {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  .money li {
    /*font-weight: 600;*/
    width: 500px;
    background: #409EFF;
    color: #ffffff;
    display: flex;
    height: 80px;
    padding: 40px 0px;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    /*border: 1px solid #ebeef5;*/
    font-size: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    /*margin-left: 10px;*/
  }

  .money li div {
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  .money li div p:first-child {
    font-size: 30px;
  }

  .money li div p:last-child {
    font-size: 16px;
  }

  .flex {
    display: flex;
    justify-content: space-around;
    align-content: center;
    height: 400px;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
  }

  .flex ul {
    list-style: none;
    font-size: 14px;
    color: #444444;
    line-height: 30px;
  }

  #myChart {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    margin-top: 30px;
  }
</style>
