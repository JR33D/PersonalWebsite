import Comment from './comment';
import ArticleContent from './content';

export default class Article {
    // Private Members
    private _content: ArticleContent = null;
    private _id: number = null;
    private _name: string = null;

    // Public Properties (getters/setters)
    public get content(): ArticleContent { return this._content; }
    public set content(newContent: ArticleContent) { this._content = newContent; }

    public get id(): number { return this._id; }
    public set id(newId: number) { this._id = newId; }

    public get name(): string { return this._name; }
    public set name(newName: string) { this._name = newName; }

    // Constructors
    constructor(id: number, name: string, content: ArticleContent) {
        this._id = id;
        this._name = name;
        this._content = content;
    }
}
