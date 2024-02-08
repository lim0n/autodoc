import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { PublicationsActions } from '../../../../news-list/state/publications.actions';
import { PublicationsState } from '../../../../news-list/state/publications.state';
import { IPublication } from '@shared/interfaces';

@Component({
  selector: 'autodoc-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.scss',
  host: { class: 'add-article' },
  encapsulation: ViewEncapsulation.None
})
export class AddArticleComponent {
  title = 'Добавить новость';
  step: 'form' | 'result' = 'form';
  @Output() closeDialog: EventEmitter<void> = new EventEmitter();
  clearTrigger = new Subject<void>();
  imageDataURL = '';
  addArticleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
    titleImageUrl: new FormControl('', Validators.required)
  });

  constructor(
    private readonly _store: Store
  ) { }

  selfDestroy(): void {
    this.closeDialog.emit();
  }

  onFileChanged( payload?: { file?: File, isImage?: boolean} ): void {
    if (payload) {
      const { file, isImage } = payload;
      if (file && isImage) {
        const reader = new FileReader();
        reader.onload = () => {this.imagePatchValue(reader)}
        reader.readAsDataURL(file);
      } else {
        this.imagePatchValue()
      }
    } else {
      this.imagePatchValue()
    }
  }

  imagePatchValue(reader?: FileReader) {
    reader?.result 
      ? this.imageDataURL = reader?.result as string 
      : this.imageDataURL = '';
    
    this.addArticleForm.patchValue({
      titleImageUrl: this.imageDataURL
    });
  }

  postArticle(): void {
    this._store.dispatch(new PublicationsActions.PostArticle(this.addArticleModel()));
    this.title = 'Готово';
    this.step = 'result';
  }

  addArticleModel(): Partial<IPublication> {
    const publishedDate = new Date().toISOString();
    return { publishedDate, ...(this.addArticleForm.value as Partial<IPublication>) }
  }

  clearFile(): void {
    this.clearTrigger.next();
  }
}
