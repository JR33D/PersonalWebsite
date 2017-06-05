import Comment from '../models/comment';

export default class ArticleRepository {
    private _comments: Array<Comment> = [];

    constructor() {
        this._comments.push(
            new Comment(1, 'Great Article', new Date(), 1, 1),
            new Comment(2, 'Do you even have a background in this topic?', new Date(), 2, 1),
            new Comment(3, 'Keep up the great work.', new Date(), 1, 2)
        );
    }
}
