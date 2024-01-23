import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsListResolver } from '@shared/services/news-list.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NewsListComponent,
    resolve: { publications: NewsListResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
