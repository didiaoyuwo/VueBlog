<template>
    <swipe class="my-swipe" >
      <swipe-item v-for='(bannerData,index) in bannerDatas' :key='index'>
        <img :src="bannerData.img" alt="Mock生成的图片" title="Mock生成的图片" class="banner-img">
        <div class="banner-content">
          <h1 class="banner-title">{{bannerData.title}}</h1>
          <span class="author-date">{{bannerData.author}} / {{bannerData.date}}</span>
        </div>
      </swipe-item>
    </swipe>
</template>
<script>
import { Swipe, SwipeItem } from 'vue-swipe'
export default {
  data () {
    return {
      bannerDatas: []
    }
  },
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },
  methods: {},
  mounted () {
    this.$axios.get('/home').then((res) => {
      this.bannerDatas = res.data.bannerData
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style lang='scss'>
@import '../../styles/banner.scss';
</style>
