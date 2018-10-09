<template>
<div>
  <h1>{{article.title}}</h1>
  <div>{{article.previewContent}}</div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Article from '@/models/article'

export default Vue.extend({
  props: ['article'],
  data() {
    return {
      name: '',
    }
  },
})
</script>

<style scoped>

</style>
