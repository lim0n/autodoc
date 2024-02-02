import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPublication } from '@shared/interfaces';

@Component({
  selector: 'autodoc-news-item-page',
  templateUrl: './news-item-page.component.html',
  styleUrl: './news-item-page.component.scss',
  host: { class: 'article container' },
  encapsulation: ViewEncapsulation.None
})
export class NewsDetailPageComponent {
  article: IPublication;
  
  constructor(
    private _route: ActivatedRoute
  ) {
      const { article } = this._route.snapshot.data;
      this.article = article;
  }
}
