import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsMasterpageComponent } from './news-masterpage.component';
import { RouterModule } from '@angular/router';
import { AddArticleModule } from '../../add-article/add-article.module';

@NgModule({
  declarations: [
    NewsMasterpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AddArticleModule
  ],
  exports: [NewsMasterpageComponent]
})
export class NewsMasterpageModule { }
