<template>
  <div>
    <com-navigation headerName="积分商城" :back="false"></com-navigation>

    <div class="global-selection">
      <h2><a href="javascript:;">Global<span class="explan">全球精选好货</span></a></h2>
      <ul class="clearfix com-goods-list">
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
        <goods-item></goods-item>
      </ul>
    </div>
  </div>
</template>

<script>
  import comNavigation from '../../components/comNavigation'
  import goodsItem from '../../components/goodsItem';

  export default {
    name: "integraShop",
    components: {
      comNavigation,
      goodsItem
    }
  }
</script>

<style scoped>
  .global-selection {
    margin-bottom: 55px;
  }

  .flash-sale,
  .hot,
  .global-selection {
    margin-top: 17px;
    background-color: #fff;
    border-top: 1px solid #ebebeb;
    background-color: #fff;
  }

  .flash-sale h2,
  .hot h2,
  .global-selection h2 {
    height: 3.125rem;
    text-align: center;
    font-size: 1.167rem;
    border-bottom: 1px solid #ebebeb;
    color: #f2f2f2;
    font-size: 1.667rem;
  }

  .flash-sale .no-bottom {
    border-bottom: none;
  }

  .flash-sale h2 a,
  .hot h2 a,
  .global-selection h2 a {
    display: block;
    width: 10rem;
    height: 100%;
    margin: 0 auto;
    position: relative;
    color: #f2f2f2;
  }
</style>
