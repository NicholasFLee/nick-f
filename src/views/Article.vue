<template>
<div>
    <h1 v-if="article">{{article.content}}</h1>
</div>    
</template>

<script lang="ts">
import Vue from 'vue'
import bs from '@/models/blog-store.ts'
import Article from '@/models/article'

export default Vue.extend({
    data() {
        return {
            article: undefined as (Article | undefined)
        }
    },
    mounted() {
        const id = this.$route.path.split('/').pop()
        const atcID = id ? id : ""
        bs.shared().getArticle(atcID, (atc?: Article, err?: Error) => {
            if (err != undefined) {
                // console.error('article id not exist')
                console.error(err)
                return
            }
            this.article = atc
        })
    }
})
</script>

<style lang="less" scoped>

</style>
