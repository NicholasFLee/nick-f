export default class Article {
    public articleID: string
    public title: string
    public createDate: Date
    public categories: string[]
    // convert to `html` from `markdown`
    public content?: string
    public previewContent?: string

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
    constructor(articleID: string, title: string, createDate: string, categories: string[],
                content?: string, previewContent?: string) {

        this.articleID = articleID
        this.title = title
        this.createDate = new Date(createDate)
        this.categories = categories
        this.content = content
        this.previewContent = previewContent
    }
}

export class Comment {
    public sender: string

    constructor(sender: string) {
        this.sender = sender
    }
}
