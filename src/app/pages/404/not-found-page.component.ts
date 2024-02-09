import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'autodoc-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
  host: { class: 'not-found' },
  encapsulation: ViewEncapsulation.None
})
export class NotFoundPageComponent {

}
