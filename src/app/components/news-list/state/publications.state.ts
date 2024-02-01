import { Injectable, NgModule } from '@angular/core';
import { State, Action, StateContext, NgxsModule, Selector } from '@ngxs/store';
import { PublicationsActions } from './publications.actions';
import { 
  IPublication, 
  PublicationsPair 
} from '@shared/interfaces';
import { PublicationsApiService } from '@shared/services/publications-api.service';
import { mapNetResponseToPublicationsPair } from '@shared/utils/map-net-response-to-publications-pair.function'
import { catchError, of, take, tap } from 'rxjs';

export interface PublicationsStateModel {
  pages: PublicationsPair[];
  flat: IPublication[];
  perPage: number;
  pageLoaded: number;
}

const defaults = {
  pages: [],
  flat: [],
  perPage: 10,
  pageLoaded: 0
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

  @Action(PublicationsActions.AddChunk)
  addChunk(ctx: StateContext<PublicationsStateModel>, { payload }: PublicationsActions.AddChunk): void {
    const { pages } = ctx.getState();
    ctx.patchState({ pages: [ ...pages, payload ] });
  }

  @Action(PublicationsActions.PushFromResponse)
  pushFromResponse(ctx: StateContext<PublicationsStateModel>, { payload }: PublicationsActions.PushFromResponse): void {
    const { pages } = ctx.getState();
    const { offsetAndCount } = payload;
    const publicationsPairModel = { pages, ...mapNetResponseToPublicationsPair(payload, offsetAndCount as string) };
    ctx.patchState({ pages: [ publicationsPairModel ]})
  }

  @Action(PublicationsActions.Bootstrap)
  getFirstPage(ctx: StateContext<PublicationsStateModel>): void {
    const { pageLoaded } = ctx.getState();
    ctx.patchState({ pageLoaded: pageLoaded + 1 });
    ctx.dispatch(new PublicationsActions.GetPage(pageLoaded + 1) );
  }

  @Action(PublicationsActions.FlattenPages)
  setFlat(ctx: StateContext<PublicationsStateModel>): void {
    const { pages, flat } = ctx.getState();

    pages.forEach((tuple) => {
      const resp = tuple[1];
      const pubs = resp.news;
      pubs?.forEach((article) => flat.push(article));
    });

    ctx.patchState({ flat: [ ...flat] });
  }

  @Action(PublicationsActions.GetPage)
  getPage(ctx: StateContext<PublicationsStateModel>, { payload }: PublicationsActions.GetPage): void {
    const pageNumber = payload;
    const { perPage } = ctx.getState();
    const offsetAndCount = `${pageNumber}/${perPage}`
    this._api.getNews(pageNumber, perPage)
      .pipe(
        take(1),
        catchError(error => of(error))
      )
      .subscribe(response => {
        ctx.dispatch(new PublicationsActions.PushFromResponse({ ...response, offsetAndCount }));
        ctx.dispatch(new PublicationsActions.FlattenPages());
      })
  }
}

@NgModule({
  imports: [NgxsModule.forRoot([PublicationsState])]
})

export class PublicationsStateModule {}
