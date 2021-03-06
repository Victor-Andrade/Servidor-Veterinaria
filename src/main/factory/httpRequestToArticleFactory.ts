import { Article } from "@domain/entity";
import { HttpRequest } from "@src/delivery/controller/http"

export class HttpRequestToArticleFactory {
    private _httpRequest: HttpRequest;

    constructor(httpRequest: HttpRequest) {
        this._httpRequest = httpRequest;
    }

    make(): Article {
        const body = this._httpRequest.body;
        const Article: Article = {
            name: body.name,
            citation: body.citation,
            doi: body.doi,
            disease: body.disease,
            state: body.state,
            url: body.url
        }
        return Article;
    }
}