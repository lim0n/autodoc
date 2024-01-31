import { Injectable, NgModule } from '@angular/core';
import { State, Action, StateContext, NgxsModule } from '@ngxs/store';
import { PublicationsActions } from './publications.actions';
import { 
  IPublication, 
  IPublicationsResponse, 
  PublicationsPair 
} from '@shared/interfaces';

export interface PublicationsStateModel {
  pages: PublicationsPair[];
  perPage: number;
}

const defaults = {
  pages: [],
  perPage: 10
};

@State<PublicationsStateModel>({
  name: 'publications',
  defaults
})
@Injectable()
export class PublicationsState {
  @Action(PublicationsActions.PublicationsAction)
  addChunk(ctx: StateContext<PublicationsStateModel>, { payload }: PublicationsActions.PublicationsAction) {
    const { pages } = ctx.getState();
    ctx.patchState({ pages: [ ...pages, payload ] });
  }
}

@NgModule({
  imports: [NgxsModule.forRoot([PublicationsState])]
})

export class PublicationsStateModule {}
