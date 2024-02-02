import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsListModule } from '../components/news-list/news-list.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NewsListModule
  ],
  exports: [RouterModule]
})
export class HomePageModule { }
