import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from './views/ArticleList.vue'
import Article from './views/Article.vue'
import Welcome from './views/Welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/article',
      name: 'ArticleList',
      component: ArticleList,
    },
    {
      path: '/article/*',
      name: 'Article',
      component: Article,
    },
  ],
})
