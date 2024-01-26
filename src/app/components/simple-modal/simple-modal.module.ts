import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleModalComponent } from './simple-modal.component';
import { SimpleModalService } from '@shared/services/simple-modal.service';



@NgModule({
  declarations: [
    SimpleModalComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [SimpleModalService],
  exports: [SimpleModalComponent]
})
export class SimpleModalModule { }
