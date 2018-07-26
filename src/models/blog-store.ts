import axios from 'axios'
import Article from './article'
import Comment from '@/models/comment';

export default class BlogStore {

    public static shared(): BlogStore {
        if (!BlogStore.instance) {
            BlogStore.instance = new BlogStore()
        }
        return BlogStore.instance
    }
    private static instance: BlogStore

    private articles: Article[]

    constructor() {
        this.articles = []
        // axios.defaults.baseURL = 'http://localhost:8080'
    }

    public getArticles(page: number, perPage: number, completed: (atcs?: Article[], err?: Error) => void) {
        axios.get('/blog/article?page=' + page + '&perPage=' + perPage)
            .then((res) => {
                const atcs: Article[] = []
                for (const r of res.data) {
                    const atc = new Article(r.articleID, r.title, r.createDate,
                                r.categories, r.content, r.previewContent)
                    atcs.push(atc)
                }
                completed(atcs, undefined)
            }).catch((err) => {
                completed(undefined, err)
            })
    }

    public getArticle(id: string, completed: (atc?: Article, err?: Error) => void) {
        let atc: Article
        axios.get(`/blog/article/${id}`)
            .then((res) => {
                const r = res.data
                atc = new Article(r.articleID, r.title, r.createDate,
                    r.categories, r.content, r.previewContent)
                completed(atc, undefined)
            }).catch((err) => {
                completed(undefined, err)
            })
    }

    public getComments(id: string, completed: (cmt?: Comment, err?: Error) => void) {
        let cmt: Comment
        axios.get(`/blog/comment/${id}`)
    }
}
