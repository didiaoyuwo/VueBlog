<template>
    <div class="blog-attention">
      <ul class="attention-ul">
        <li v-for='(attention,index) in attentionDatas' :key='index' class="attention-li">
            <h1 class="attention-title">{{attention.id}}.{{attention.title}}</h1>
            <p class="attention-article">{{attention.content}}</p>
        </li>
    </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      attentionDatas: [],
      attentionPath: this.$route.path
    }
  },
  mounted () {
    this.$axios.get('/attention').then(res => {
      this.attentionDatas = res.data.AttentionData
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style lang='scss' scoped>
@import '../../styles/attention.scss';
</style>
