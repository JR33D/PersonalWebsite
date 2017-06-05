import User from '../models/user';

export default class ArticleRepository {
    private _users: Array<User> = [];

    constructor() {
        this._users.push(
            new User('Person', 'name@email.com', 'Me', 1, 'Person'),
            new User('Hax0r', 'secretAgent@guy.com', 'John', 2, 'Smith'),
            new User('AwesomeGuy', 'guy@awesome.com', 'awesome', 3, 'guy')
        );
    }
}
