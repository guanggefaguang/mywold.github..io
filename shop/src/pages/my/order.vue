<template>
  <div class="com-body3">
    <com-navigation headerName="我的订单"></com-navigation>
    <div class="order-header">
      <a href="javascript:;" v-on:click="getOrder(0)" :class="{active : type==0}">全部</a>
      <a href="javascript:;" v-on:click="getOrder(1)" :class="{active : type==1}">待付款</a>
      <a href="javascript:;" v-on:click="getOrder(2)" :class="{active : type==2}">待发货</a>
      <a href="javascript:;" v-on:click="getOrder(3)" :class="{active : type==3}">待收货</a>
      <a href="javascript:;" v-on:click="getOrder(4)" :class="{active : type==4}">已完成</a>
    </div>
    <div class="order-con">
      <div class="order-item" v-cloak>
        <div class="item-header">
          <p>订单编号:<span></span>149809809234723</p>
          <div>
            <!--<span class="order-color" v-if="data.tradeStatus==0">交易关闭</span>-->
            <!--<span class="order-color" v-if="data.tradeStatus==1">等待付款</span>-->
            <!--<span class="order-color" v-if="data.tradeStatus==2||data.tradeStatus==5">待发货</span>-->
            <!--<span class="order-color" v-if="data.tradeStatus==7">已发货</span>-->
            <span class="order-color">交易成功</span>
          </div>
        </div>
        <div class="goods-details">
          <div class="img-box">
            <img src="../../m-images/goods-details.jpg"/>
          </div>
          <div class="goods-der">
            <p class="goods-name" v-html="'精品海购DFAW防晒霜'"></p>
            <div class="goods-tips">
              <span>规格：<span v-html="'L号码大瓶'"></span></span>
            </div>
          </div>
          <div class="price">
            <p>￥<span v-html="'180.00'"></span></p>
            <p class="goods-num">×<span v-html="'1'"></span></p>
          </div>
        </div>
        <div class="order-time">
          <!--<p v-html="'2018-1-1'"></p>-->
          <div class="all-money">
            <span><span>共</span><span v-html="'5'"></span><span>件</span></span>
            <span><span>应付总额：￥</span><span class="order-color" v-html="'180.00'"></span></span>
          </div>
        </div>
        <div class="make-box">
          <a href="javascript:;">取消订单</a>
          <router-link to="/surePay" class="red">去付款</router-link>
        </div>

      </div>
    </div>
    <com-loading :isLoading="isLoading"></com-loading>
    <div class="com-no-num margin-top" v-if="noNum"><img src="../../m-images/no-order.png"/></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import '@/js/imgLazy';
  import comLoading from '@/components/comLoading';
  import comNavigation from '@/components/comNavigation';

  export default {

    name: 'order',

    data() {
      return {
        orderTrades: [],
        isLoading: true,
        type: this.$route.query.type,
        noNum: false
      }
    },

    mounted() {
      this.getOrder(this.$route.query.type);
    },

    methods: {

      getOrder(type) {
        this.type = type;
        this.isLoading = true;
        this.noNum = false;
        this.orderTrades = [];
        this.axios.post(this.API.orderMo, $.param({type: type}))
          .then((data) => {
            console.log(data.data);
            var data = data.data;
            if (data.message == true) {
              this.orderTrades = data.orderTrades;
              this.isLoading = false;
              if (this.orderTrades.length === 0) {
                this.noNum = true;
              } else {
                this.$nextTick(function () {
                  new lazyImg();
                });
              }
            }
          });
      },

      delOrder(tradeId) {
        this.axios.post(this.API.delTrade, $.param({tradeIds: tradeId}))
          .then((data) => {
            var data = data.data;
            if (data.message) {
              if (data.msg === "00000000") {
                this.getOrder(this.type);
              } else {
                window.$toast({
                  msg: data.message
                });
              }
            }
          });
      },

      qxOrder(tradeNo) {
        this.axios.post(this.API.updateTrade, $.param({tradeNo: tradeNo}))
          .then((data) => {
            var data = data.data;
            this.getOrder(this.type);
          });
      },

      takeOrder(tradeId) {
        this.axios.post(this.API.updateStatus, $.param({tradeId: tradeId}))
          .then((data) => {
            var data = data.data;
            window.$toast({
              msg: data.message
            });
            this.getOrder(this.type);
          });
      },

      format(time) {
        let date = new Date(time);
        return date.getFullYear() + '-' + this.two(date.getMonth() + 1) + '-' + this.two(date.getDate());
      },

      two(day) {
        if (day < 10) {
          return '0' + day;
        }
        return day;
      }
    },

    components: {
      comLoading,
      comNavigation
    }
  }
</script>

<style scoped>
  .com-body3 {
    padding-top: 6.667rem;
  }

  .com-no-num {
    width: 8rem;
    margin: 0 auto;
  }

  .order-header {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-align-items: center;
    align-items: center;
    position: fixed;
    z-index: 90;
    width: 100%;
    height: 3.167rem;
    left: 0;
    top: 3.5rem;
    background: #fff;
  }

  .order-header a {
    display: block;
    height: 3.167rem;
    line-height: 3.167rem;
    padding: 0 .5rem;
    color: #1a1a1a;
    font-size: 1.1rem;
    border-bottom: 2px solid #fff;
  }

  .order-header .active {
    border-bottom: 2px solid #bc4344;
  }

  .order-con {
    padding-bottom: 0.708rem;
  }

  .order-item {
    margin-top: 0.708rem;
    background: #fff;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
  }

  .order-item .item-header {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    height: 2.833rem;
    padding: 0 1.333rem;
  }

  .order-item .all-money span {
    vertical-align: middle;
  }

  .order-item .order-color {
    color: #ff4b4b;
    vertical-align: middle;
  }

  .order-item .delete {
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.833rem;
    width: 1.25rem;
    height: 1.25rem;
    background: url(../../m-images/icon2.png) no-repeat 0 -14.833rem;
    background-size: 33.333rem 33.333rem;
  }

  .order-item .goods-details {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    height: 5.833rem;
    margin-bottom: 0.417rem;
    padding: 0.667rem 1.333rem;
    background: #fcfcfc;
    color: #1a1a1a;
  }

  .order-item .img-box {
    width: 4.583rem;
    height: 4.583rem;
    overflow: hidden;
  }

  .order-item .goods-der {
    width: 13rem;
    margin: 0 0.417rem;
  }

  .order-item .goods-name {
    height: 3rem;
    line-height: 1.5;
    font-size: 1.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .order-item .goods-tips {
    margin-top: 0.208rem;
    color: #acacac;
    font-size: 0.833rem;
  }

  .order-item .price {
    text-align: right;
  }

  .order-item .price .refund-btn {
    display: block;
    margin-top: 0.25rem;
    font-size: 0.833rem;
    line-height: 1.5;
    border: 1px solid #9c9c9c;
    color: #9c9c9c;
    border-radius: 3px;
  }

  .order-item .goods-num {
    color: #8b8b8b;
    font-size: 0.833rem;
    vertical-align: middle;
  }

  .order-item .order-time {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    height: 1.5rem;
    padding: 0 1.333rem;
    font-size: 0.917rem;
  }

  .order-item .make-box {
    text-align: right;
    padding: .3rem 1.333rem 1rem;
  }

  .order-item .make-box a {
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.417rem;
    width: 5.917rem;
    line-height: 1.917rem;
    border: 1px solid #9c9c9c;
    color: #9c9c9c;
    text-align: center;
    border-radius: 3px;
    font-size: 1.167rem;
  }

  .order-item .make-box .red {
    color: #9f2e33;
    border: 1px solid #9f2e33;
  }

  .margin-top1 {
    margin-top: 7rem;
  }

  .margin-top {
    margin-top: 11rem !important;
  }
</style>

