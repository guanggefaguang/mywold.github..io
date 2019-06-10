<template>
  <div class="shop-body">
    <div class="header clearfix">
      <a href="javascript:;" class="edit" v-on:click="edit()">
        <span v-if="!isEditting">编辑</span>
        <span v-else>完成</span>
      </a>
      <h1>购物车</h1>
      <a href="javascript:history.back()" class="header-back"></a>
    </div>

    <ul>
      <li v-for="(item,index) in carList">
        <input type="checkbox" :id="item.id" :value="item" v-model="checkedNames" @click="change()"/>
        <label :for="item.id" :class="checkedNames.indexOf(item) !== -1 ? 'ok' : 'page'"></label>
        <router-link :to="'/goodsDetails?goodsNo=1'" class="goods-img">
          <img src="../../m-images/goods-details.jpg"/>
        </router-link>
        <div style="display: flex;height: 100%;flex-direction: column;width: 7rem;justify-content: space-between;">
          <p style="color: #9f2e33;">{{item.name}}</p>
          <p>规格：<span>L大码</span></p>
          <p v-bind:style="{'color':'#9f2e33'}">价格:<span>￥</span><span>{{item.money}}</span>
          </p>
        </div>
        <div class="quantity-selector clearfix" v-show="!isEditting">
          <span class="reduce" @click="jian(index)" :class="{disable : item.num==1}">－</span>
          <input type="text" v-model="item.num" class="number" readonly="true"/>
          <span class="add" @click="jia(index)">＋</span>
        </div>
        <div class="delete-box" v-show="isEditting">
          <a href="javascript:;" class="delete">删除</a>
        </div>
      </li>
    </ul>


    <div class="settle-accounts">
      <div class="makes-box">
        <div class="all-choose-box">
          <label for="min" :class="state ? 'ok' : 'page'" @click="all"></label>
          <input type="checkbox" v-model="state" id="min" style="display: none;"/>
          <span>全选</span>
        </div>
        <div class="all-money" style="display: flex;flex-direction: column;justify-content: center;">
          <p>
            <span>总金额<span class="money-tips"></span>：</span>
            <span class="all-money-num">￥</span><span class="all-money-num total-money"
                                                      v-html='allmoney'></span>
          </p>
        </div>
      </div>
      <a href="javascript:;" class="make-btn" v-on:click="pay()">去结算</a>
    </div>
    <div class="no-shop" v-if='carList < 0'>
      <img src="../../m-images/no-shop.png"/>
      <router-link to="/index">去逛逛吧 !</router-link>
    </div>
  </div>
</template>

<script>
  import comLoading from '@/components/comLoading';

  export default {
    name: "shopCar",
    data() {
      return {
        carList: [
          {name: '防嗮爽SDF精品海外精选', money: 20, id: 1, num: 1},
          {name: '水果', money: 10, id: 2, num: 2},
          {name: '主食', money: 100, id: 3, num: 3},
        ],
        checkedNames: [],
        name: '',
        allmoney: 0,
        state: false,
        num: 1,
        isEditting: false
      }
    },
    components: {
      comLoading
    },
    methods: {
      edit() {
        this.isEditting = !this.isEditting
      },
      jia(index) {
        this.num = this.carList[index].num
        this.num++
        this.carList[index].num = this.num
        this.change()
      },
      jian(index) {
        this.num = this.carList[index].num
        this.num--
        this.carList[index].num = this.num
        this.change()
      },
      change() {
        this.allmoney = 0;
        this.$nextTick(() => {
          for (let i = 0; i < this.checkedNames.length; i++) {
            this.allmoney += parseInt(this.checkedNames[i].money) * parseInt(this.checkedNames[i].num)
          }
          console.log(this.checkedNames)
          if (this.checkedNames.length !== this.carList.length) {
            this.state = false
          } else {
            this.state = true
          }
        })

      },
      all() {
        this.state = !this.state
        if (this.state == true) {
          this.checkedNames = []
          this.checkedNames = this.carList
          this.change()
        } else {
          this.checkedNames = []
          this.change()
        }
      },
      pay() {
        console.log(this.checkedNames)
      }
    }
  }

</script>

<style scoped>
  .clearfix:after {
    content: ".";
    visibility: hidden;
    display: block;
    height: .1px;
    font-size: .1em;
    line-height: 0;
    clear: both;
  }

  .quantity-selector {
    width: 8.571rem;
    line-height: 2.9rem;
    border: 1px solid #cccccc;
    border-radius: 3px;
  }

  .quantity-selector .reduce,
  .quantity-selector .add {
    float: left;
    width: 33.33%;
    border-right: 1px solid #cccccc;
    text-align: center;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 400;
  }

  .quantity-selector .number {
    float: left;
    width: 33.33%;
    height: 2.857rem;
    padding: .5rem 0;
    line-height: 1rem;
    border: none;
    text-align: center;
  }

  .quantity-selector .add {
    border-left: 1px solid #cccccc;
    border-right: none;
  }

  .quantity-selector .disable {
    cursor: not-allowed;
    color: #d2d2d2;
  }

  ul {
    margin-top: 4rem;
  }

  ul li {
    height: 7.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    padding: 1rem;
    border-bottom: 1px solid #cccccc;
  }

  .page {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: url("../../m-images/none.png") no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }

  .ok {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: url("../../m-images/change.png") no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }

  ul li input[type='checkbox'] {
    display: none;
  }

  body {
    padding: 3.5rem 0 7rem;
  }

  .edit {
    position: absolute;
    right: 0.875rem;
    top: 1.2rem;
    color: #131313;
  }

  .shop-box {
    padding-top: 3.5rem;
    margin-bottom: 0.833rem;
    background: #fff;
    border-top: 1px solid #ebebeb;
  }

  /*订单头部开始*/
  .shop-header {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    height: 3.125rem;
    padding: 0 1.333rem;
  }

  .shop-header .bsq,
  .shop-header .zy {
    font-size: 1.1rem;
    margin-left: 0.417rem;
    padding-left: 1.833rem;
    height: 1.25rem;
    background: url(../../m-images/shop-icon.png) no-repeat 0 0;
    background-size: 12.5rem 12.5rem;
  }

  .shop-header .zy {
    height: 1.5rem;
    background-position: 0 -2.875rem;
    line-height: 1.5;
    background-position: 0 -2.875rem;
  }

  .shop-header .post-activity {
    margin-left: 10px;
    position: relative;
    z-index: 10;
    border: 1px solid #9f2e33;
    padding: 2px 5px;
    color: #fff;
    box-shadow: 2px 2px 0 #c68d8f;
    font-size: 0.75rem;
    background: #9f2e33;
  }

  .shop-header .post-activity:before {
    content: '';
    position: absolute;
    left: -7px;
    top: 3.5px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-right: 6px solid #9f2e33;
    border-bottom: 5px solid transparent;
  }

  /*订单头部结束*/

  .checkbox input,
  .checkbox1 input {
    position: absolute;
    z-index: -1;
    border: none;
  }

  .checkbox i,
  .checkbox1 i,
  .choose i {
    display: inline-block;
    vertical-align: middle;
    width: 1.4rem;
    height: 1.4rem;
    background: url(../../m-images/pay.png) no-repeat 0 -9.8rem;
    background-size: 16.667rem 16.667rem;
  }

  .choose i {
    background-position: 0 -13.65rem;
  }

  /*checkbox结束*/

  /*商品开始*/
  .goods-item .activity {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    color: #f34f34;
    height: 3.75rem;
    padding: 0 1.333rem;
    font-size: 0.917rem;
  }

  .goods-item .activity i {
    width: 0.417rem;
    height: .7rem;
    vertical-align: middle;
    background: url(../../m-images/shop-icon.png) no-repeat 0 -5.958rem;
    background-size: 12.5rem 12.5rem;
  }

  .goods-item .activity .activity-header {
    width: 7rem;
    margin-right: 0.417rem;
    font-size: 0.833rem;
    border: 1px solid #f34f34;
    padding: 2px;
  }

  .goods-item .activity .activity-header1 {
    width: 7rem;
  }

  .goods-item .goods-box {
    border-bottom: 1px solid #ebebeb;
  }

  .goods-item .goods-show {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    height: 8.5rem;
    padding: 0 1.333rem;
    overflow: hidden;
  }

  .goods-img {
    position: relative;
    margin: 0 .5rem;
    width: 5.417rem;
    height: 5.417rem;
    overflow: hidden;
  }

  .goods-item .goods-link {
    width: 10rem;
    margin: 0 1rem 0 0.417rem;
    overflow: hidden;
  }

  .goods-item .num-box {
    width: 9rem;
    text-align: right;
  }

  .goods-item .goods-link-main {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    color: #4c4c4c;
    font-size: 1.1rem;
  }

  .goods-item .norms-tax {
    color: #999;
    font-size: 0.917rem;
  }

  .goods-item .norms-tax span {
    display: inline-block;
    vertical-align: middle;
  }

  .goods-item .norms-tax .norms {
    display: inline-block;
    vertical-align: middle;
    width: 6rem;
  }

  .goods-item .price {
    color: #f34f34;
  }

  .goods-item .tax {
    display: block;
    position: relative;
    text-align: right;
    color: #999;
    font-size: 0.917rem;
    height: 1rem;
  }

  .goods-item .tax i,
  .goods-item .down i {
    display: inline-block;
    vertical-align: middle;
    margin-left: .2rem;
    width: 0.833rem;
    height: 0.417rem;
    background: url(../../m-images/shop-icon.png) no-repeat 0 -9.6rem;
    background-size: 12.5rem 12.5rem;
  }

  .goods-item .down i {
    background-position: 0 -8.208rem;
  }

  .goods-item .tax-show {
    display: none;
    padding: .5rem 1rem;
    line-height: 1.5rem;
    background: #f7f7f7;
    color: #4d4d4d;
    font-size: 0.917rem;
  }

  .goods-item .delete-box {
    display: none;
    height: 3rem;
  }

  .goods-item .delete {
    display: inline-block;
    padding-top: 1.5rem;
    width: 3rem;
    height: 3rem;
    background: url(../../m-images/icon2.png) no-repeat .8rem -14.833rem;
    background-size: 33.333rem 33.333rem;
    text-align: center;
    color: #000;
  }

  /*商品结束*/

  /*金额细节开始*/
  .money-details {
    border-bottom: 1px solid #ebebeb;
    padding-left: 1.333rem;
    font-size: 1.1rem;
  }

  .money-details .goods-money {
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    color: #999;
    border-bottom: 1px solid #ebebeb;
    padding: 0.833rem 1.333rem .833rem 0;

  }

  .money-details .color {
    color: #1a1a1a;
  }

  .money-details .goods-money p {
    text-align: right;
  }

  .money-details .tax-box,
  .money-details .post-box,
  .money-details .all-money-box {
    height: 2.5rem;
    padding-right: 1.333rem;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    border-bottom: 1px solid #ebebeb;
  }

  .money-details .all-money {
    color: #9f2e33;
  }

  .money-details .preferential-amount {
    margin-top: .2rem;
    font-size: 0.833rem;
  }

  .money-details .settle {
    padding-top: 0.708rem;
    height: 3.333rem;
  }

  .money-details .settle-btn {
    float: right;
    margin-right: 1.333rem;
    width: 6.042rem;
    height: 2.0rem;
    background: #9f2e33;
    text-align: center;
    line-height: 2rem;
    color: #fff;
    font-size: 1.25rem;
  }

  .money-details .go-single {
    height: 1rem;
    color: #1a1a1a;
    font-size: 0.833rem;
  }

  .money-details .go-single i {
    display: inline-block;
    vertical-align: middle;
    margin-left: .5rem;
    width: 0.5rem;
    height: 0.917rem;
    background: url(../../m-images/shop-icon.png) no-repeat 0 -5.917rem;
    background-size: 12.5rem 12.5rem;
  }

  .money-details .go-single span {
    color: #f34f34;
  }

  .money-details .go-single label {
    display: inline-block;
    vertical-align: middle;
    margin-right: .5rem;
    width: 1.4rem;
    height: 1.4rem;
    line-height: 1.4rem;
    border-radius: 50%;
    border: 1px solid #202020;
    color: #202020;
    font-size: 0.833rem;
    text-align: center;
    transform: scale(0.9, 0.9);
  }

  .money-details .go-single label span {
    transform: scale(0.5, 0.5);
  }

  .no-goods {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 3.5rem;
    height: 1.167rem;
    line-height: 1.167rem;
    text-align: center;
    background: #7f7f7f;
    /*opacity: 0;*/
    color: #fff;
    border-radius: 4px;
    font-size: 0.75rem;
  }

  .opacity {
    opacity: .8;
  }

  /*金额细节结束*/

  /*数据选择器开始*/
  .quantity-selector {
    line-height: 2rem;
    border: 1px solid #cccccc;
  }

  .quantity-selector .reduce,
  .quantity-selector .add {
    float: left;
    width: 30%;
    border-right: 1px solid #cccccc;
    text-align: center;
  }

  .quantity-selector .add {
    border-left: 1px solid #cccccc;
    border-right: none;
  }

  .quantity-selector .number {
    float: left;
    width: 40%;
    height: 2rem;
    padding: .5rem 0;
    border: none;
    text-align: center;
  }

  .quantity-selector .disable {
    color: #d2d2d2;
  }

  /*数据选择器结束*/

  /*没有数据开始*/
  .no-shop {
    width: 10.833rem;
    margin: 5.0rem auto;
    text-align: center;
  }

  .no-shop a {
    display: block;
    margin: 1.25rem auto;
    width: 7.583rem;
    line-height: 2.208rem;
    border: 1px solid #9f2e33;
    color: #9f2e33;
    text-align: center;
    border-radius: 3px;
  }

  /*没有数据结束*/

  /*底部栏开始*/
  .edit-box {
    display: none;
  }

  .settle-accounts {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5rem;
    border-top: 1px solid #e9ebf1;
    background: #fff;
    font-size: 1.143rem;
  }

  .settle-accounts .makes-box {
    float: left;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    width: 64%;
    height: 100%;
    padding: .5rem 0.625rem 0 1.333rem;
  }

  .all-choose-box {
    display: flex;
    width: 5rem;
    justify-content: space-around;
    float: left;
  }

  .settle-accounts .all-money {
    width: 10.833rem;
    height: 100%;
    font-size: 1rem;
    text-align: right;
  }

  .settle-accounts .all-money-num {
    color: #9f2e33;
  }

  .settle-accounts .make-btn {
    float: right;
    width: 36%;
    background: #9f2e33;
    color: #fff;
    text-align: center;
    line-height: 5rem;
    font-size: 1.4rem;
  }

  .settle-accounts .com-choose {
    color: #000;
    font-size: 1.1rem;
  }

  #deleteBox {
    display: none;
  }

  .settle-accounts .money-tips {
    color: #c3c3c3;
    font-size: 0.833rem;
  }

  /*底部栏结束*/

  /*底部邮费提示开始*/
  .post-tips-box {
    position: fixed;
    left: 0;
    bottom: 5rem;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    color: #000;
    font-size: 0.833rem;
    padding-left: 3rem;
    background: #f8d8d9 url(../../m-images/refund.png) no-repeat 1.2rem -6.7rem / 8.333rem 8.333rem;
  }

  /*底部邮费提示结束*/

  /*2017年9月7日重写购物车新增css开始*/
  .goods-item .delete-box,
  .goods-item .tax-show {
    display: block;
  }

  .goods-item .norms-tax .norms {
    width: 5rem;
  }

  .goods-item .num-box {
    width: 10rem;
  }

  .quantity-selector {
    height: 2.6rem;
    line-height: 2.6rem;
    overflow: hidden;
    border-radius: 3px;
  }

  .quantity-selector .number {
    height: 2.5rem;
    line-height: 1.7rem;
    font-size: 1.2rem;
    background: #fff;
  }

  .goods-item .price {
    font-size: 1.2rem;
  }

  .quantity-selector .reduce,
  .quantity-selector .add {
    font-size: 1.5rem;
    cursor: pointer;
  }

  /*2017年9月7日重写购物车新增css结束*/


</style>

