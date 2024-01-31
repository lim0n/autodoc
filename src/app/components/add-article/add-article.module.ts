import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from './add-article.component';
import { ImageInputModule } from '../image-input/image-input.module';



@NgModule({
  declarations: [
    AddArticleComponent
  ],
  imports: [
    CommonModule,
    ImageInputModule
  ],
  exports: [AddArticleComponent]
})
export class AddArticleModule { }
