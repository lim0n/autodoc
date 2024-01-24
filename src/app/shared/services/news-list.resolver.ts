import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { IPublicationsResponse } from '@shared/interfaces';
import { PublicationsApiService } from './publications-api.service';

@Injectable({
  providedIn: 'root'
})
export class NewsListResolver implements Resolve<IPublicationsResponse | unknown> {
  constructor(
    private readonly _api: PublicationsApiService
  ) { }

  resolve(): Observable<IPublicationsResponse | unknown> {
    return this._api.getNews()
      .pipe(
        catchError(error => of(error)));
  }
}
