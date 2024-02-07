import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from './add-article.component';
import { ImageInputModule } from '../../../../image-input/image-input.module';
import { PublicationsStateModule } from '../../../../news-list/state/publications.state';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    AddArticleComponent
  ],
  imports: [
    CommonModule,
    ImageInputModule,
    PublicationsStateModule,
    ReactiveFormsModule,
    NgxsModule
  ],
  exports: [AddArticleComponent]
})
export class AddArticleModule { }
