import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  exports: [NewsRoutingModule]
})
export class NewsModule { }
