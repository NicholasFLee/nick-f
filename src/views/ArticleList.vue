<template>
  <div class="container">
      <ArticleListCell v-if="articles" v-for="(item, index) in articles" :key="index" @click.native="cellClicked(item)" :article="item" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Article from '@/models/article'
import ArticleListCell from '@/components/ArticleListCell.vue'
import bs from '@/models/blog-store.ts'

export default Vue.extend({
  components: {
    ArticleListCell,
  },
  data() {
    return {
      articles: [] as (Article[] | undefined),
    }
  },
  mounted() {
    bs.shared().getArticles(1, 5, (atcs?: Article[], err?: Error) => {
      if (err !== undefined) {
        console.error(err)
        return
      }
      this.articles = atcs
    })
  },
  methods: {
    cellClicked(e: Article) {
      this.$router.push({ path: `/article/${e.articleID}` })
    },
  },
})
</script>

<style lang="less" scoped>

</style>
