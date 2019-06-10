import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'

Vue.use(Router)

const router = new Router({
  routes: [...routers]
})

router.beforeEach(function (to, from, next) {
  console.log(to)
  console.log(from)
  next()
})

export default router;
