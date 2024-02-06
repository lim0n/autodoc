import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AddArticleModule } from '../add-article/add-article.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AddArticleModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
