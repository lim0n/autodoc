import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'autodoc-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.scss',
  host: { class: 'add-article' },
  encapsulation: ViewEncapsulation.None
})
export class AddArticleComponent {
  @Output() closeDialog: EventEmitter<void> = new EventEmitter();
  clearTrigger = new Subject<void>();
  imageDataURL = '';

  selfDestroy(): void {
    this.closeDialog.emit();
  }

  onFileChanged( payload?: { file?: File, isImage?: boolean} | undefined ): void {

    if (payload) {
      const { file, isImage } = payload;
  
      if (file && isImage) {
        const reader = new FileReader();
        reader.onload = e => this.imageDataURL = reader.result as string;
        reader.readAsDataURL(file);
      } else {
        this.imageDataURL = '';
      }
    } else {
      this.imageDataURL = '';
    }
  }

  clearFile(): void {
    this.clearTrigger.next();
  }
}
