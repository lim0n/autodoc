import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsMasterpageComponent } from './news-masterpage.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [
    NewsMasterpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  exports: [NewsMasterpageComponent]
})
export class NewsMasterpageModule { }
