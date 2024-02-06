import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AddArticleModule } from '../add-article/add-article.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AddArticleModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
