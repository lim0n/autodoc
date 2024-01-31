import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { SimpleModalService } from '@shared/services/simple-modal.service';

@Component({
  selector: 'autodoc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'autodoc_modules';
  
  constructor(private _modalService: SimpleModalService) {}

  // openSimpleModal(modalTemplate: TemplateRef<any>) {
  //   this._modalService
  //     .open(modalTemplate, 'Добавить новость');
  // }

  
}
