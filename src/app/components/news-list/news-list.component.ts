import { 
  Component, 
  ElementRef, 
  ViewChild, 
  ViewEncapsulation 
} from '@angular/core';
import { 
  Observable, 
  Subject, 
  filter, 
  take, 
  takeUntil 
} from 'rxjs';
import { IPublication } from '@shared/interfaces';
import { PlatformService } from '@shared/services/platform.service';
import { Store, Select } from '@ngxs/store';
import { PublicationsActions } from './state/publications.actions';
import { PublicationsState } from './state/publications.state';

@Component({
  selector: 'autodoc-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss',
  host: { class: 'news-list' },
  encapsulation: ViewEncapsulation.None
})
export class NewsListComponent {
  private destroyed: Subject<boolean> = new Subject<boolean>();
  private observer!: IntersectionObserver;
  @Select(PublicationsState.publications$) publications$!: Observable<IPublication[]>;
  @Select(PublicationsState.pageLoaded$) pageLoaded$!: Observable<number>;
  @ViewChild('anchor') anchor!: ElementRef;
  pubs!: IPublication[];
  
  constructor (
    private readonly _platform: PlatformService,
    private readonly _store: Store
  ) {
    this.publications$
      .pipe(
        filter(Boolean),
        takeUntil(this.destroyed)
      )
      .subscribe((value) => {
        this.pubs = value;
      } );

      // this.pubs?.length 
      //   ? !this._platform.isServer 
      //     ? this._store.dispatch([new PublicationsActions.GetNextPage]) 
      //     : this._store.dispatch([new PublicationsActions.BootstrapLocalArticle, new PublicationsActions.GetNextPage])
      //   : this._store.dispatch(new PublicationsActions.GetNextPage);

      if (this._platform.isServer) {
        if ( !this.pubs?.length ) {
          this._store.dispatch([
            new PublicationsActions.GetNextPage
          ]);
        }
      } else {
        if ( !this.pubs?.length ) {
          this._store.dispatch([
            new PublicationsActions.BootstrapLocalArticle,
            new PublicationsActions.GetNextPage
          ]);
        }
      }

    // if (!this._platform.isServer) {
    //   if ( !this.pubs?.length ) {
    //     this._store.dispatch([
    //       new PublicationsActions.BootstrapLocalArticle,
    //       new PublicationsActions.GetNextPage,
    //     ]);
    //   }
    // } else {
    //   if ( !this.pubs?.length ) {
    //     this._store.dispatch([
    //       new PublicationsActions.GetNextPage
    //     ]);
    //   }
    // }
  }
  
  ngAfterViewInit(): void {
    if (this._platform.isServer)  { return; }
    this.initSubsciptions();
  }

  initSubsciptions():void {
    this.pageLoaded$
      .pipe(take(1))
      .subscribe(()=> {this.initIntersectionObserver(this.anchor.nativeElement)})
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.unsubscribe();
    this.observer?.disconnect();
  }

  getNextPage(): void {
    this._store.dispatch([new PublicationsActions.GetNextPage]);
  }

  initIntersectionObserver(element: HTMLElement): IntersectionObserver | void {
    const options: IntersectionObserverInit = {
      rootMargin: '-101% 0px 100% 0px'
    };

    const action: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          this.getNextPage();
        }
      })
    }

    this.observer = new IntersectionObserver(action, options);
    this.observer.observe(element);
  }
}
