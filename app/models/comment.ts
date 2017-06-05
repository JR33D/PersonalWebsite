import User from './user';

export default class Comment {
    // Private Members
    private _id: number = null;
    private _message: string = null;
    private _postedDate: Date = null;
    private _user: User = null;

    // Public Properties (getters/setters)
    public get id(): number { return this._id; }
    public set id(newId: number) { this._id = newId; }

    public get message(): string { return this._message }
    public set message(newMessage: string) { this._message = newMessage; }

    public get postedDate(): Date { return this._postedDate; }
    public set postedDate(newPostedDate: Date) { this._postedDate = newPostedDate; }

    public get user(): User { return this._user; }
    public set user(newUser: User) { this._user = newUser; }

    // Constructors
    constructor(id: number, message: string, postedDate: Date, user: User) {
        this._id = id;
        this._message = message;
        this._postedDate = postedDate;
        this._user = user;
    }
}
