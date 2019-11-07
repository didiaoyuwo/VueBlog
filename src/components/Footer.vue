<template>
    <footer class="blog-footer">
        <ul class="footer-ul">
            <li class="home-btn" @click="jump('home')">
                <img src="../../static/homecolor.png" alt="" ref='home'>
            </li>
            <li class="write-btn">
                <img src="../../static/write.png" alt="">
            </li>
            <li class="my-btn" @click="jump('userlogin')">
                <img src="../../static/my.png" alt="" ref='user'>
            </li>
            <li>我就是想来测试一下啊</li>
        </ul>
    </footer>
</template>
<script>
import home from '../../static/home.png'
import homecolor from '../../static/homecolor.png'
import myColor from '../../static/mycolor.png'
import my from '../../static/my.png'
export default {
  methods: {
    jump (name) {
      this.$router.push({name})
    },
    changeHome () {
      this.$refs.home.src = homecolor
    },
    home () {
      this.$refs.home.src = home
    },
    changeUser () {
      this.$refs.user.src = myColor
    },
    user () {
      this.$refs.user.src = my
    }
  },
  watch: {
    $route (to) {
      if (to.path === '/home') {
        this.changeHome()
      } else {
        this.home()
      }
      if (to.path === '/userlogin') {
        this.changeUser()
      } else {
        this.user()
      }
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../styles/footer.scss';
</style>
