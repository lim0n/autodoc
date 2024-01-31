import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'autodoc-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.scss'
})
export class AddArticleComponent {
  clearTrigger = new Subject<void>();
  imageDataURL = '';
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
