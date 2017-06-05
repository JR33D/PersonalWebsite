import Article from '../models/article';
import ArticleContent from '../models/content';

export default class ArticleRepository {
    private _articles: Array<Article> = [];

    constructor() {
        this._articles.push(
            new Article(1, 'Article One', new ArticleContent(1, 'This is the content of article one for reading and stuff.')),
            new Article(2, 'Article Two', new ArticleContent(2, 'This is the content of article two for reading and stuff.')),
            new Article(3, 'Article Three', new ArticleContent(3, 'This is the content of article three for reading and stuff.')),
            new Article(4, 'Article Four', new ArticleContent(4, 'This is the content of article four for reading and stuff.')),
            new Article(5, 'Article Five', new ArticleContent(5, 'This is the content of article five for reading and stuff.')),
            new Article(6, 'Article Six', new ArticleContent(6, 'This is the content of article six for reading and stuff.'))
        );
    }
}
