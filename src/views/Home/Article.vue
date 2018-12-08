<template>
    <section class="blog-article">
        <ul class="article-ul">
            <li class="article-li" v-for='(article,index) in articleDatas' :key='index' @click='jump(article,article.id)'>
                <h1 class="article-title">{{article.title}}</h1>
                <p class="article-content">{{article.content}}</p>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
  data () {
    return {
      articleDatas: []
    }
  },
  methods: {
    jump (article, id) {
      // console.log(article)
      new Promise((resolve, reject) => {
        this.$store.dispatch('getAritcleContent', article)
        resolve()
      }).then(() => {
        this.$router.push({path: `/article/${id}`})
      })
      // this.$store.dispatch('getAritcleContent', article)
      // setTimeout(() => {
      //   this.$router.push({path: `/article/${id}`})
      // }, 200)
    }
  },
  mounted () {
    this.$axios.get('/home').then((res) => {
      this.articleDatas = res.data.ArticleData
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style lang='scss' scoped>
@import '../../styles/article.scss';
</style>
