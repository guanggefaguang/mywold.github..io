<template>
  <div class="address-box">
    <div class="header clearfix">
      <router-link class="add-address-btn" to="addAddress">添加新地址</router-link>
      <h1>收货地址</h1>
      <a href="javascript:history.back();" class="header-back"></a>
    </div>
    <div class="has-address">
      <div class="address-item">
        <div class="name-phone">
          <span v-html="'SeiRi'"></span>
          <span v-html="'123456789022'"></span>
        </div>
        <div class="details">
          <i></i>
          <span><label v-html="'山西省太原市小店区'"></label><label v-html="'亲贤北街'" class="address-details"></label></span>
        </div>
        <div class="make">
          <a href="javascript:;" class="delete"><span>删除</span></a>
        </div>
      </div>
      <router-link to="addAddress" class="add-new-address" v-on:click="goAdd()">添加新地址</router-link>
    </div>
    <div class="no-address" v-if="noNum">
      <img src="../../m-images/no-address.png"/>
      <p>我找不到你，你在哪里？</p>
      <router-link to="addAddress">立即添加</router-link>
    </div>
    <comLoading :isLoading="isLoading"></comLoading>
  </div>
</template>

<script>
  import commonMethods from '@/js/common';
  import comLoading from '@/components/comLoading';

  export default {

    name: 'address',

    data() {
      return {
        isLoading: false,
        noNum: false
      }
    },

    mounted() {
      // this.getAddressList();
    },

    methods: {

      chooseAddress(addId) {
        if (this.$route.query.fromAddress == 1) {
          commonMethods.setCookie('PALACE_ORDER_ADDRESS', addId);
          this.$router.push('surePay');
        }
      },

      getAddressList() {
        this.axios.post(this.API.addressMo).then((data) => {
          var data = data.data;
          this.isLoading = false;
          if (data.success) {
            this.addressList = data.adr;
            if (this.addressList.length == 0) {
              this.noNum = true;
            } else {
              this.noNum = false;
            }
          }
        });
      },

      defaultAdress(addrId, flag, index) {
        if (flag === 1) {
          return;
        }
        this.axios.post(this.API.mgrAddrFlag, $.param({
          addrId: addrId,
          flag: flag
        })).then((data) => {
          var data = data.data;
          if (data.success) {
            window.$toast({
              msg: "默认地址设置成功"
            });
            this.getAddressList();
          }
        });
      },

      deleteAddress(addrId) {
        this.axios.post(this.API.delAddress, $.param({
          userAddrId: addrId
        })).then((data) => {
          console.log(data.data);
          var data = data.data;
          if (data.msg == "00000000") {
            window.$toast({
              msg: '删除成功'
            });
          }
          this.getAddressList();
        });
      }
    },

    components: {
      comLoading
    }
  }
</script>

<style scoped>
  .address-box {
    padding-top: 4rem;
  }

  .add-address-btn {
    position: absolute;
    top: 1.2rem;
    right: .875rem;
    color: #ff4b4b;
    font-size: 0.917rem;
  }

  .address-item {
    width: 95%;
    height: 7.833rem;
    border-radius: 3px;
    margin: 0.667rem;
    background: #fff;
  }

  .address-item .name-phone {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    height: 2.25rem;
    padding: 0 0.667rem;
  }

  .address-item .details {
    height: 2.583rem;
    border-bottom: 1px solid #ebebeb;
    padding: 0 0.667rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .address-item .details i {
    display: inline-block;
    vertical-align: middle;
    width: 0.9rem;
    height: 1.2rem;
    background: url(../../m-images/icon2.png) no-repeat 0 -24.2rem;
    background-size: 33.333rem 33.333rem;
  }

  .address-item .details span {
    font-size: 0.833rem;
    color: #999;
    word-break: break-all;
  }

  .address-item .default {
    vertical-align: middle;
    color: #000;
    font-size: 0.917rem;
  }

  .address-item .make {
    padding: .8rem 0.667rem;
  }

  .address-item .default i,
  .address-item .active i {
    display: inline-block;
    vertical-align: middle;
    margin-right: .4rem;
    width: 1.4rem;
    height: 1.4rem;
    background: url(../../m-images/pay.png) no-repeat 0 -9.8rem;
    background-size: 16.667rem 16.667rem;
  }

  .address-item .active i {
    background-position: 0 -13.65rem;
  }

  .address-item .modify,
  .address-item .delete {
    float: right;
    margin: .2rem 0 0 1.458rem;
    height: 1.0rem;
    padding-left: 1.458rem;
    background: url(../../m-images/address.png) no-repeat 0 0;
    background-size: 4.167rem 4.167rem;
    color: #999;
    font-size: 0.917rem;
    vertical-align: middle;
    font-size: 0.833rem;
  }

  .address-item .delete {
    background-position: 0 -2.125rem;
  }

  .address-item .address-details {
    margin-left: 0.417rem;
  }

  .add-new-address {
    display: block;
    width: 95%;
    line-height: 2.208rem;
    margin: 1rem auto;
    color: #9f2e33;
    border: 1px solid #9f2e33;
    text-align: center;
    border-radius: 4px;
  }

  .no-address {
    padding-top: 8.125rem;
    text-align: center;
    color: #9a9a9a;
  }

  .no-address a {
    display: block;
    width: 7.583rem;
    line-height: 2.25rem;
    color: #9f2e33;
    text-align: center;
    margin: 0.833rem auto;
    border-radius: 3px;
    border: 1px solid #9f2e33;
  }
</style>

