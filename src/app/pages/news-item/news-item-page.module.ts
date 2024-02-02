import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailPageComponent } from './news-item-page.component';
import { NewsItemResolver } from '@shared/services/news-item.resolver';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: NewsDetailPageComponent,
  resolve: { article: NewsItemResolver }
}];

@NgModule({
  declarations: [
    NewsDetailPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NewsDetailPageModule { }
