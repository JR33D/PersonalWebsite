export default class ArticleContent {
    // Private Members
    private _id: number = null;
    private _body: string = null;

    // Public Properties (getters/setters)
    public get id(): number { return this._id; }
    public set id(newId: number) { this._id = newId; }

    public get body(): string { return this._body; }
    public set body(newBody: string) { this._body = newBody; }

    // Constructor
    constructor(id: number, body: string) {
        this._id = id;
        this._body = body;
    }
}
