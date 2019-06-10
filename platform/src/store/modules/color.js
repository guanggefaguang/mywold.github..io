const state = {
  color: ''
}
const actions = {
  getColor({commit}, params) {
    commit('COLOR', params)
    localStorage.setItem('color', params)
  }
}

const mutations = {
  ['COLOR'](state, data) {
    state.color = data
  }
}

const getters = {
  bgColor: state => state.color
}

export default {
  state,
  actions,
  mutations,
  getters
}
