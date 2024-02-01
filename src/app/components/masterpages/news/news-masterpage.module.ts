import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsMasterpageComponent } from './news-masterpage.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NewsMasterpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NewsMasterpageComponent]
})
export class NewsMasterpageModule { }
