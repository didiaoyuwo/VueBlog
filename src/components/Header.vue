<template>
    <header class="blog-header">
        <nav class="blog-nav">
            <ul class="nav-ul">
                <li v-for='(item,index) in navData' :key='index' @click='jump(item.link)' class="nav-li" :class="{'active':item.active}">
                    {{item.title}}
                </li>
            </ul>
            asdasda
        </nav>
    </header>
</template>
<script>
export default {
  data () {
    return {
      navData: [
        {
          id: 1,
          title: '首页',
          link: '/home',
          active: true
        },
        {
          id: 2,
          title: '关注',
          link: '/attention',
          active: false
        },
        {
          id: 3,
          title: '栏目',
          link: '/colom',
          active: false
        }
      ]
    }
  },
  methods: {
    jump (link) {
      this.$router.push({path: `${link}`})
    },
    active (path) {
      this.navData.forEach((nav) => {
        nav.active = false
        if (nav.link === path || nav.link === path || nav.link === path) {
          nav.active = true
        }
      })
    }
  },
  mounted () {
    // console.log(this.homeStatus)
  },
  watch: {
    $route (to) {
      let path = to.path
      this.active(path)
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../styles/header.scss'
</style>
