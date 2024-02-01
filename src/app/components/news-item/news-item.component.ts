import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IPublication } from '@shared/interfaces';

@Component({
  selector: 'autodoc-news-item',
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.scss',
  host: { class: 'news-item' },
  encapsulation: ViewEncapsulation.None
})
export class NewsItemComponent {
  @Input() data!: IPublication;
}
