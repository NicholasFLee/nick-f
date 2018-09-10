export default class Article {
    public articleID: string
    public title: string
    public createDate: Date
    public categories: string[]
    // convert to `html` from `markdown`
    public content?: string
    public previewContent?: string
    public comments: Comment[]

    /**
     * Creates an instance of Article.
     * @param {string} articleID
     * @param {string} title
     * @param {string} createDate
     * @param {string[]} categories
     * @param {string} [content]
     * @param {string} [previewContent]
     * @memberof Article
     */
    constructor(articleID: string, title: string, createDate: string, categories: string[], comments: Comment[],
                content?: string, previewContent?: string) {

        this.articleID = articleID
        this.title = title
        this.createDate = new Date(createDate)
        this.categories = categories
        this.comments = comments
        this.content = content
        this.previewContent = previewContent
    }
}

export class Comment {
    public commentID: string
    public content: string
    public createDate: string
    public authorName: string
    public subComments: SubCommnet[]

    constructor(commentID: string, content: string, createDate: string,
                authorName: string, subComment: SubCommnet[]) {
        this.commentID = commentID
        this.content = content
        this.createDate = createDate
        this.authorName = authorName
        this.subComments = subComment
    }
}

class SubCommnet {
    public authorName: string
    public createDate: string
    public content: string

    constructor(authorName: string, createDate: string, content: string) {
        this.authorName = authorName
        this.createDate = createDate
        this.content = content
    }
}
