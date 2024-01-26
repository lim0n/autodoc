import { 
  Component, 
  ElementRef, 
  Input, 
  ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'autodoc-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrl: './simple-modal.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SimpleModalComponent {
  @Input() title? = 'Modal title';

  constructor(private elementRef: ElementRef) {}

  close(): void {
    this.elementRef.nativeElement.remove();
  }
}
