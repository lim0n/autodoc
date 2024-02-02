import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsMasterpageComponent } from '../../components/masterpages/news/news-masterpage.component';
import { NewsMasterpageModule } from '../../components/masterpages/news/news-masterpage.module';

const routes: Routes = [
  {
    path: '', component: NewsMasterpageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('@pages/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'news/:thread/:item',
        loadChildren: () => import('@pages/news-item/news-item-page.module').then(m => m.NewsDetailPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NewsMasterpageModule
  ],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
