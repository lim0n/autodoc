import { Injectable, NgModule } from '@angular/core';
import { State, Action, StateContext, NgxsModule, Selector } from '@ngxs/store';
import { PublicationsActions } from './publications.actions';
import { 
  IPublication, 
  PublicationsPair 
} from '@shared/interfaces';
import { PublicationsApiService } from '@shared/services/publications-api.service';
import { mapNetResponseToPublicationsPair } from '@shared/utils/map-net-response-to-publications-pair.function'
import { catchError, filter, of, take, tap } from 'rxjs';

export interface PublicationsStateModel {
  pages: PublicationsPair[];
  flat: IPublication[];
  perPage: number;
  pageLoaded: number;
  pageRequested: number;
}

const defaults = {
  pages: [],
  flat: [],
  perPage: 10,
  pageLoaded: 0,
  pageRequested: 0
};

@State<PublicationsStateModel>({
  name: 'publications',
  defaults
})
@Injectable()
export class PublicationsState {

  constructor(
    private readonly _api: PublicationsApiService
  ) { }

  @Selector()
  static pages$(state: PublicationsStateModel): PublicationsPair[] {
    return state.pages
  }

  @Selector()
  static publications$(state: PublicationsStateModel): IPublication[] {
    return state.flat
  }

  @Selector()
  static pageLoaded$(state: PublicationsStateModel): number {
    return state.pageLoaded
  }

  @Action(PublicationsActions.AddChunk)
  addChunk(ctx: StateContext<PublicationsStateModel>, { payload }: PublicationsActions.AddChunk): void {
    const { pages } = ctx.getState();
    pages.unshift(payload);
    ctx.patchState({ pages });
  }

  @Action(PublicationsActions.PushFromResponse)
  pushFromResponse(ctx: StateContext<PublicationsStateModel>, { payload }: PublicationsActions.PushFromResponse): void {
    const { pages } = ctx.getState();
    const { offsetAndCount } = payload;
    const pushval = mapNetResponseToPublicationsPair(payload, offsetAndCount as string);
    ctx.patchState({ pages: [...pages, pushval] })
  }

  @Action(PublicationsActions.FlattenPages)
  setFlat(ctx: StateContext<PublicationsStateModel>): void {
    const { pages } = ctx.getState();
    const flat: IPublication[] = [];
    pages.forEach((tuple) => {
      const resp = tuple[1];
      const pubs = resp.news;
      pubs?.forEach((article) => {
        flat.push(article);
      });
    });
    ctx.patchState({ flat: [ ...flat] });
  }

  @Action(PublicationsActions.GetPage)
  getPage(ctx: StateContext<PublicationsStateModel>, { payload }: PublicationsActions.GetPage): void {
    const { perPage, pageLoaded } = ctx.getState();
    const pageRequested = payload;
    const offsetAndCount = `${pageRequested}/${perPage}`
    this._api.getNews(pageRequested, perPage)
      .pipe(
        take(1),
        catchError(error => of(error))
      )
      .subscribe(response => {
        ctx.patchState({ pageLoaded: pageRequested });
        ctx.dispatch(new PublicationsActions.PushFromResponse({ ...response, offsetAndCount }));
        ctx.dispatch(new PublicationsActions.FlattenPages());
      })
  }

  @Action(PublicationsActions.GetNextPage)
  getNextPage(ctx: StateContext<PublicationsStateModel>): void {
    const { pageLoaded, pageRequested } = ctx.getState();
    // Todo: проработать наполнение экрана
    if ( pageLoaded !== pageRequested && pageLoaded > 1 ) { 
      return; 
    }
    ctx.patchState({ pageRequested: pageRequested + 1 });
    ctx.dispatch(new PublicationsActions.GetPage(pageRequested + 1) );
  }

  @Action(PublicationsActions.PostArticle)
  postArticle(ctx: StateContext<PublicationsStateModel>, { payload }: PublicationsActions.PostArticle): void {
    const { pages } = ctx.getState();
    this._api.postArticle(payload)
      .pipe(
        take(1),
        catchError(error => of(error))
      ).subscribe(pair => {
        ctx.dispatch([
          new PublicationsActions.AddChunk(pair),
          new PublicationsActions.FlattenPages
        ]);
      })
  }

  @Action(PublicationsActions.GetLocalArticle)
  getLocalArticle(ctx: StateContext<PublicationsStateModel>): void {
    const { pages } = ctx.getState();
    this._api.getLocalArticle()
      .pipe(
        take(1),
        filter(Boolean),
        catchError(error => of(error))
      ).subscribe(pair => {
        ctx.dispatch([
          new PublicationsActions.AddChunk(pair),
          new PublicationsActions.FlattenPages
        ]);
      })
  }
}

@NgModule({
  imports: [NgxsModule.forRoot([PublicationsState])]
})

export class PublicationsStateModule {}
