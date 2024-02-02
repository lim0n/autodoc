import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { PublicationsStateModule } from './state/publications.state';
import { NewsItemModule } from '../news-item/news-item.module';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NewsListComponent
  ],
  imports: [
    CommonModule,
    PublicationsStateModule,
    NewsItemModule,
    NgxsModule,
    RouterModule
  ],
  exports: [NewsListComponent]
})
export class NewsListModule { }
