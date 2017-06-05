export default class User {
    // Private Members
    private _displayName: string = null;
    private _email: string = null;
    private _firstName: string = null;
    private _id: number = null;
    private _lastName: string = null;

    // Public Properties (getters/setters)
    public get displayName(): string { return this._displayName; }
    public set displayName(newDisplayName: string) { this._displayName = newDisplayName; }

    public get email(): string { return this._email; }
    public set email(newEmail: string) { this._email = newEmail; }

    public get firstName(): string { return this._firstName; }
    public set firstName(newFirstName: string) { this._firstName = newFirstName; }

    public get fullName(): string { return this._firstName + ' ' + this._lastName; }

    public get id(): number { return this._id; }
    public set id(newId: number) {this._id = newId;}

    public get lastName(): string { return this._lastName; }
    public set lastName(newLastName: string) { this._lastName = newLastName; }

    // Constructors
    constructor(displayName: string, email: string, firstName: string, id: number, lastName: string) {
        this._displayName = displayName;
        this._email = email;
        this._firstName = firstName;
        this._id = id;
        this._lastName = lastName;
    }
}
