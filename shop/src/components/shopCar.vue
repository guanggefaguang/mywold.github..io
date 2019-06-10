<template>
  <div>
    <ul>
      <li v-for="(item,index) in carList">
        <input type="checkbox" :id="item.id" :value="item" v-model="checkedNames" @click="change()"/>
        <label :for="item.id" :class="checkedNames.indexOf(item) !== -1 ? 'ok' : 'page'"></label>
        <div>{{item.name}}{{item.money}}</div>
        <button @click="jia(index)">+</button>
        <input type="text" v-model="item.num"/>
        <button @click="jian(index)">-</button>
      </li>
    </ul>
    <input type="checkbox" v-model="state" @click="all"/>
    <div>总价{{allmoney}}</div>
    <button @click="pay">确认支付</button>
  </div>
</template>

<script>
  export default {
    name: "shopCar",
    data() {
      return {
        carList: [
          {name: '蔬菜', money: 20, id: 1, num: 1},
          {name: '水果', money: 10, id: 2, num: 2},
          {name: '主食', money: 100, id: 3, num: 3},
        ],
        checkedNames: [],
        name: '',
        allmoney: 0,
        state: false,
        num: 1
      }
    },
    methods: {
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
            this.allmoney += parseInt(this.checkedNames[i].money)*parseInt(this.checkedNames[i].num)
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
  ul li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid red;
  }

  .page {
    display: block;
    width: 2rem;
    height: 2rem;
    background: url("../m-images/none.png") no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }

  .ok {
    display: block;
    width: 2rem;
    height: 2rem;
    background: url("../m-images/change.png") no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }

  input {
    width: 2rem;
    height: 2rem;
  }
</style>
