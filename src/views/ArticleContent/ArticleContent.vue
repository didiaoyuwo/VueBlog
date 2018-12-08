<template>
    <div class="article-content">
        <div class='article-goback'>
            <img src="../../../static/history.png" alt="" class='goback' @click='goback()'>
        </div>
        <header class="article-header">
            <div class="author-name">
                <img :src='articleContent.img' alt="" class="article-author">
                <p class="article-name">{{articleContent.author}}</p>
            </div>
            <h1 class="article-title">{{articleContent.title}}</h1>
            <div class="time-zan">
                <span class="article-time">{{articleContent.time}}</span>
                <img src="../../../static/zan.png" alt="" class="article-zang">
            </div>
        </header>
        <article class="article-article">
            {{articleContent.content}}
        </article>
        <footer class="article-footer">
            <div class='artcle-message'>
                <img src="../../../static/say.png" alt="" class="img">
                <span class="count">{{articleContent.sayNum}}</span>
            </div>
            <div class='artcle-zang'>
                <img src="../../../static/zan1.png" alt="" class="img">
                <span class="count">{{articleContent.zanNum}}</span>
            </div>
            <div class='artcle-love'>
                <img src="../../../static/xing.png" alt="" class="img">
                <span class="count">{{articleContent.shareNum}}</span>
            </div>
            <div class='artcle-share'>
                <img src="../../../static/fx.png" alt="" class="img">
            </div>
        </footer>
    </div>
</template>
<script>
export default {
  data () {
    return {
      articleContent: []
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.articleContent = this.$store.getters.articleContent
  }
}
</script>
<style lang='scss' scoped>
@import '../../styles/articlecontent.scss';
</style>
