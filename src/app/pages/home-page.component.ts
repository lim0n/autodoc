import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'autodoc-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  host: { class: 'home-page' },
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent {}
