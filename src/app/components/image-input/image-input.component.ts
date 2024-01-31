import { 
  Component, 
  ElementRef, 
  EventEmitter, 
  Input, 
  OnDestroy, 
  OnInit, 
  Output, 
  ViewChild, 
  ViewEncapsulation 
} from '@angular/core';
import { PlatformService } from '@shared/services/platform.service';
import { isFileHasExtension } from '@shared/utils/is-file-has-extension.function';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'autodoc-image-input',
  templateUrl: './image-input.component.html',
  styleUrl: './image-input.component.scss',
  host: { class: 'image-input' },
  encapsulation: ViewEncapsulation.None
})
export class ImageInputComponent implements OnInit, OnDestroy {
  @Input() formats = ['jpg', 'png', 'webp'];
  @Input() events: Observable<void> | undefined;
  @ViewChild('fileUpload') fileUpload!: ElementRef;
  @Output() fileSelected = new EventEmitter< { file?: File | undefined, isImage?: boolean | undefined }>();
  isFileHasExtension = isFileHasExtension;
  files: FileList | null | undefined;
  fileName = '';
  fileIsImage: boolean | undefined;
  imageDataURL = '';
  private eventsSubscription: Subscription | undefined;

  constructor(
    private readonly _platform: PlatformService
  ) {}

  ngOnInit(): void {
    // if (this._platform.isServer) { return; }

    this.eventsSubscription = this.events?.subscribe(() => this.clearInput());
  }

  ngOnDestroy(): void {
    this.eventsSubscription?.unsubscribe();
  }

  clearInput():void {
    this.fileUpload.nativeElement.value = '';
    this.files = this.fileUpload.nativeElement.files;
    this.fileName = '';
    this.imageDataURL = '';

    this.fileSelected.emit()
  }

  onChange():void {
    this.files = this.fileUpload.nativeElement.files;
    let file: File | undefined;

    if (this.files) {
      file = this.files[0];
      this.fileIsImage = isFileHasExtension(file,this.formats)
      this.fileName = this.files[0].name;
      this.fileSelected.emit({ file, isImage: this.fileIsImage })
    }
  }

  // setImageDataUrl(file: File): void {
  //   const reader = new FileReader();
  //   reader.onload = e => this.imageDataURL = reader.result as string;
  //   reader.readAsDataURL(file);
  // }

  // createImage(file: File, type: BlobPropertyBag) {
  //   const fr = new FileReader();
    
  //   fr.onload = function() {
  //     const blob = new Blob(fr.result, type);
  //     const url = URL.createObjectURL(blob);      
  //   }
  // }
}
