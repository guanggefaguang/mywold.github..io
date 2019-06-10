import vue from 'vue'
import vuex from 'vuex'
import user from './modules/user'
import color from './modules/color'


vue.use(vuex)

const store = new vuex.Store({
  modules: {
    user,
    color
  }
})

export default store
