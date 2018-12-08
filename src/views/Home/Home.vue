<template>
    <div class="blog-home">
        <blog-banner></blog-banner>
        <blog-article></blog-article>
    </div>
</template>
<script>
import BlogBanner from './Banner'
import BlogArticle from './Article'
export default {
  data () {
    return {
      homePath: this.$route.path
    }
  },
  components: {
    BlogBanner,
    BlogArticle
  }
}
</script>
<style lang='scss' scoped>
</style>
