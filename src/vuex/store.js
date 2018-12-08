import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'

import { SHOW_HEADER, HIDE_HEADER, GET_ARTICLE_CONTENT, HIDE_FOOTER, SHOW_FOOTER, SHOW_LOADING, HIDE_LOADING } from './type'

Vue.use(Vuex)

const state = {
  headerShow: true,
  footerShow: true,
  articleContent: [],
  isShow: false
}

const mutations = {
  [SHOW_HEADER] (state) {
    state.headerShow = true
  },
  [HIDE_HEADER] (state) {
    state.headerShow = false
  },
  [GET_ARTICLE_CONTENT] (state, article) {
    state.articleContent = article
  },
  [HIDE_FOOTER] (state) {
    state.footerShow = false
  },
  [SHOW_FOOTER] (state) {
    state.footerShow = true
  },
  [SHOW_LOADING] (state) {
    state.isShow = true
  },
  [HIDE_LOADING] (state) {
    state.isShow = false
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
