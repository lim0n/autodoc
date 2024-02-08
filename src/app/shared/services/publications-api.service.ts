import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPublicationsResponse } from '../interfaces/publications-response.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPublication, PublicationsPair } from '@shared/interfaces';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationsApiService {
  readonly API = 'https://webapi.autodoc.ru';
  private localNews$$ = new BehaviorSubject<PublicationsPair>(['localNews', {}]);
  localNews: PublicationsPair = {
    0: 'localNews',
    1: {}
  };

  constructor(
    private readonly _http: HttpClient,
    private _platform: PlatformService
  ) {
    if (!this._platform.isServer) {
      this.localNews[1] = JSON.parse( localStorage.getItem('localNews') as string ) as IPublicationsResponse;
      if (this.localNews[1] === null) {
        this.localNews[1] = { news: [] };
      }
      this.localNews$$.next(this.localNews);
    }
  }

  getNews(page = 1, count = 10): Observable<IPublicationsResponse> {
    const url = new URL(`/api/news/${page}/${count}`, this.API);
    return this._http.get(String(url));
  }

  getArticle(thread: string, item: string): Observable<IPublicationsResponse> {
    const url = new URL(`/api/news/item/${thread}/${item}`, this.API);
    return this._http.get(String(url));
  }

  postArticle(publication: IPublication): Observable<PublicationsPair> {
    this.localNews[1].news?.push(publication);
    localStorage.setItem( 'localNews', JSON.stringify(this.localNews[1]) );
    this.localNews$$.next(this.localNews);
    return this.localNews$$;
  }

  getLocalArticles(): Observable<PublicationsPair> {
    return this.localNews$$;
  }
}
