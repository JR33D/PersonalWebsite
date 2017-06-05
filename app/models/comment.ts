import User from './user';

export default class Comment {
    // Private Members
    private _id: number = null;
    private _message: string = null;
    private _postedDate: Date = null;
    private _userId: number = null;
    private _articleId: number = null;

    // Public Properties (getters/setters)
    public get id(): number { return this._id; }
    public set id(newId: number) { this._id = newId; }

    public get message(): string { return this._message }
    public set message(newMessage: string) { this._message = newMessage; }

    public get postedDate(): Date { return this._postedDate; }
    public set postedDate(newPostedDate: Date) { this._postedDate = newPostedDate; }

    public get userId(): number { return this._userId; }
    public set userId(newUserId: number) { this._userId = newUserId; }

    // Constructors
    constructor(id: number, message: string, postedDate: Date, userId: number, articleId: number) {
        this._id = id;
        this._message = message;
        this._postedDate = postedDate;
        this._userId = userId;
        this._articleId = articleId;
    }
}
