import * as types from './type'

export default {
  showHeader: ({commit}) => {
    commit(types.SHOW_HEADER)
  },
  hideHeader: ({commit}) => {
    commit(types.HIDE_HEADER)
  },
  hideFooter: ({commit}) => {
    commit(types.HIDE_FOOTER)
  },
  showFooter: ({commit}) => {
    commit(types.SHOW_FOOTER)
  },
  getAritcleContent: ({commit}, article) => {
    commit(types.GET_ARTICLE_CONTENT, article)
  },
  showLoading: ({commit}) => {
    commit(types.SHOW_LOADING)
  },
  hideLoading: ({commit}) => {
    commit(types.HIDE_LOADING)
  }
}
