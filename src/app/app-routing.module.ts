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
  },
  { path: 'errors/404', loadChildren: () => import('@pages/404/not-found-page.module').then(m => m.NotFoundPageModule) },
  { path: 'errors/500', loadChildren: () => import('@pages/500/server-error-page.module').then(m => m.ServerErrorPageModule) },
  { path: '**', redirectTo: '/errors/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
