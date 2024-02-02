import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPublicationsResponse } from '../interfaces/publications-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationsApiService {
  readonly API = 'https://webapi.autodoc.ru';

  constructor(
    private readonly _http: HttpClient,
  ) { }

  getNews(page = 1, count = 10): Observable<IPublicationsResponse> {
    const url = new URL(`/api/news/${page}/${count}`, this.API);
    return this._http.get(String(url));
  }

  getArticle(thread: string, item: string): Observable<IPublicationsResponse> {
    const url = new URL(`/api/news/item/${thread}/${item}`, this.API);
    return this._http.get(String(url));
  }
}
