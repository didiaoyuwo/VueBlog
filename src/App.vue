<template>
  <div id="app">
    <loading v-model="this.$store.getters.loadingStatus" :options="{'indicatorText': '列表数据正在加载中，请稍后...','isShowMask':true,'isShowAnimation':true,'isFixed':true}" ></loading>
    <blog-header v-show='navStatus'></blog-header>
      <transition name="slide">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    <blog-footer v-show='footerStatus'></blog-footer>
  </div>
</template>

<script>
import BlogHeader from './components/Header.vue'
import BlogFooter from './components/Footer.vue'
export default {
  name: 'App',
  data () {
    return {
      navStatus: true,
      footerStatus: true,
      isShow: true
    }
  },
  components: {
    BlogHeader,
    BlogFooter
  },
  watch: {
    $route (to) {
      let path = to.path
      this.navChange(path).then(() => {
        this.navStatus = this.$store.getters.headStatus
      })
      this.footerChange(path).then(() => {
        this.footerStatus = this.$store.getters.footerStatus
      })
    }
  },
  methods: {
    navChange (path) {
      return new Promise((resolve, reject) => {
        if (path === '/home' || path === '/attention' || path === '/colom') {
          this.$store.dispatch('showHeader')
          resolve()
        } else {
          this.$store.dispatch('hideHeader')
          resolve()
        }
      })
    },
    footerChange (path) {
      return new Promise((resolve, reject) => {
        if (path.includes('article')) {
          this.$store.dispatch('hideFooter')
          resolve()
        } else if (path === '/home' || path === '/attention' || path === '/colom' || path === 'userlogin') {
          this.$store.dispatch('showFooter')
          resolve()
        }
      })
    }
  }
}
</script>
<style>
@import './styles/base.scss';
</style>
