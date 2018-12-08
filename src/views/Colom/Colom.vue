<template>
    <div class="blog-colom">
      <ul class="colom-ul">
        <li v-for='(colom,index) in colomDatas' :key='index' class="colom-li">
            <h1 class="colom-title">{{colom.id}}.{{colom.title}}</h1>
            <p class="colom-article">{{colom.content}}</p>
        </li>
    </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      colomDatas: [],
      colomPath: this.$route.path
    }
  },
  mounted () {
    this.$axios.get('/colom').then(res => {
      this.colomDatas = res.data.ColomData
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style lang='scss' scoped>
@import '../../styles/colom.scss';
</style>
