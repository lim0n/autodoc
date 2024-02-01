import { Component, ViewEncapsulation } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IPublication, PublicationsPair } from '@shared/interfaces';
import { PlatformService } from '@shared/services/platform.service';
import { Store, Select } from '@ngxs/store'
import { PublicationsActions } from './state/publications.actions';
import { PublicationsState } from './state/publications.state';

@Component({
  selector: 'autodoc-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss',
  // host: { class: 'news-list' },
  encapsulation: ViewEncapsulation.None
})
export class NewsListComponent {
  pubs: IPublication[] | undefined;

  @Select(PublicationsState.publications$) publications$!: Observable<IPublication[]>;
  
  constructor (
    private readonly _route: ActivatedRoute,
    private readonly _platform: PlatformService,
    private readonly _store: Store
  ) {
    const { publications } = this._route.snapshot.data;

    this.publications$
      .pipe(
        filter(Boolean)
      )
      .subscribe((value) => this.pubs = value );

    this._store.dispatch([new PublicationsActions.Bootstrap]);
    
    if (this._platform.isServer)  { return; }
    this.initSubsciptions();
  }

  initSubsciptions():void {
    
  }

}
