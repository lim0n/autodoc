import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Портал новостей'},
    loadChildren: () => import('@routing/news/news-routing.module').then(m => m.NewsRoutingModule) 
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
