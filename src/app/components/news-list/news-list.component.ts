import { Component } from '@angular/core';
import { BehaviorSubject, filter, map, pluck } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IPublication } from '@shared/interfaces';
import { PlatformService } from '@shared/services/platform.service';

@Component({
  selector: 'autodoc-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})
export class NewsListComponent {
  publications$$ = new BehaviorSubject(undefined);
  news: IPublication[] | undefined;
  
  constructor (
    private readonly _route: ActivatedRoute,
    private readonly _platform: PlatformService
  ) {
    const { publications } = this._route.snapshot.data;
    
    this._route.data
      .pipe(
        pluck('publications'),
        filter(Boolean))
      .subscribe(publications => this.publications$$.next(publications));

    this.publications$$
      .pipe(
        map(value => value?.['news']))
      .subscribe(news =>
        this.news = news as unknown as IPublication[]);
    
    if (this._platform.isServer)  { return; }
    this.initSubsciptions();
  }

  initSubsciptions():void {
    
  }

}
