import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { PublicationsStateModule } from './state/publications.state';

@NgModule({
  declarations: [
    NewsListComponent
  ],
  imports: [
    CommonModule,
    PublicationsStateModule
  ],
  exports: [NewsListComponent]
})
export class NewsListModule { }
