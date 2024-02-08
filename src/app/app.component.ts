import { 
  Component, 
  // TemplateRef, 
  ViewEncapsulation 
} from '@angular/core';
import { 
  // Scroll, 
  Router, 
  NavigationEnd 
} from '@angular/router';
import { PlatformService } from '@shared/services/platform.service';
// import { SimpleModalService } from '@shared/services/simple-modal.service';
// import { prevNextRouteMatch } from '@shared/utils/prev-current-route-match.function';
import { Subject, filter  } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ScrollService } from '@shared/services/scroll.service';

@Component({
  selector: 'autodoc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: { class: 'app-component' },
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'autodoc_modules';
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    // private _modalService: SimpleModalService,
    private readonly _platform: PlatformService,
    private readonly _router: Router,
    private readonly _scroll: ScrollService
  ) {}

  ngOnInit(): void {
    if (this._platform.isServer) { return; }
    this.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  initSubscriptions(): void {
    const scrollIndent = 100;
    this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroyed$))
      .subscribe(target => this._scroll.scrollTo('body', scrollIndent))
  }

  // openSimpleModal(modalTemplate: TemplateRef<any>) {
  //   this._modalService
  //     .open(modalTemplate, 'Добавить новость');
  // }
  
}
