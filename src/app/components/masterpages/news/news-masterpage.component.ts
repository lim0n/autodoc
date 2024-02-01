import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { StyleCleaner } from '@shared/utils/unstyle-on-destroy.class';

@Component({
  selector: 'autodoc-news-masterpage',
  templateUrl: './news-masterpage.component.html',
  styleUrl: './news-masterpage.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NewsMasterpageComponent extends StyleCleaner {
  constructor(
    @Inject(DOCUMENT) documentRef: Document
  ) {
    super(documentRef)
  }
}
