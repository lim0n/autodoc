import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerErrorPageComponent } from './server-error-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ServerErrorPageComponent }];

@NgModule({
  declarations: [
    ServerErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ServerErrorPageModule { }
