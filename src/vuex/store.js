import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  items: [{ text: '小米电视4A', checked: true },
          { text: '米家扫地机器人', checked: false },
          { text: 'Yeelight LED吸顶灯', checked: false }],
  title: '双11都买些啥啦？'
}

const getters = {
  getItems: state => state.items,
  getTitle: state => state.title
}

const mutations = {
  addItem(state, item) {
    state.items.push(item)
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters
})
