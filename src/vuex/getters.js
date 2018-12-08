export default {
  headStatus: (state) => {
    return state.headerShow
  },
  articleContent: (state) => {
    return state.articleContent
  },
  footerStatus: (state) => {
    return state.footerShow
  },
  loadingStatus: (state) => {
    return state.isShow
  }
}
