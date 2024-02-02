import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { IPublication } from '@shared/interfaces';
import { Observable, catchError, of } from 'rxjs';
import { PublicationsApiService } from './publications-api.service';

@Injectable({
  providedIn: 'root'
})
export class NewsItemResolver implements Resolve<IPublication | unknown> {
  constructor(
    private readonly _api: PublicationsApiService,
    private _router: Router
  ) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPublication | unknown> {
    const { thread, item } = route.params;
    return this._api.getArticle(thread, item)
      .pipe(
        catchError(error => this._router.navigate(['/errors/404'])));
  }
}
