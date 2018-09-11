import axios from 'axios'
import Article, { Comment, SubCommnet } from './article'

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
                    const cmts: Comment[] = []
                    for (const c of r.comments) {
                        const scmts: SubCommnet[] = []
                        for (const sc of c.subComments) {
                            const scmt = new SubCommnet(sc.authorName, sc.createDate, sc.content)
                            scmts.push(scmt)
                        }
                        const cmt = new Comment(c.commentID, c.content, c.createDate, c.authorName, scmts)
                        cmts.push(cmt)
                    }
                    const atc = new Article(r.articleID, r.title, r.createDate,
                        r.categories, cmts, r.content, r.previewContent)
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
                    r.categories, r.comments, r.content, r.previewContent)
                completed(atc, undefined)
            }).catch((err) => {
                completed(undefined, err)
            })
    }
}
