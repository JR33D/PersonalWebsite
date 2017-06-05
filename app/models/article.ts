import Comment from './comment';

export default class Article {
    // Private Members
    private _comments: Array<Comment> = null;
    private _id: number = null;
    private _name: string = null;

    // Public Properties (getters/setters)
    public get comments(): Array<Comment> { return this._comments; }
    public set comments(newComments: Array<Comment>) { this._comments = newComments; }

    public get id(): number { return this._id; }
    public set id(newId: number) { this._id = newId; }

    public get name(): string { return this._name; }
    public set name(newName: string) { this._name = newName; }

    // Constructors
    constructor(name: string, id: number, comments: Array<Comment> = []) {
        this._id = id;
        this._name = name;
        this._comments = comments;
    }

    // Action Methods
    public addNewComment(comment: Comment): Array<Comment> {
        this._comments.push(comment);
        return this._comments;
    }
}
