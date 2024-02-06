import { ApplicationRef, Component, ComponentFactoryResolver, Inject, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { AddArticleComponent } from '../add-article/add-article.component';

@Component({
  selector: 'autodoc-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: { class: 'news-header' },
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  componentRef: any;
  factory: any;
  @ViewChild('addArticleDialog', { read: ViewContainerRef }) addArticleDialog!: ViewContainerRef;

  constructor(
    @Inject(ComponentFactoryResolver) private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef
  ) { }

  createDialogComponent(): void {
    this.addArticleDialog.clear();
    this.factory = this.resolver.resolveComponentFactory(AddArticleComponent);
    this.componentRef = this.addArticleDialog.createComponent(this.factory);
    this.componentRef.instance.closeDialog.subscribe(() => {
      this.destroyDialogComponent();
    });
  }

  destroyDialogComponent(): void {
    this.componentRef.destroy()
    this.appRef.detachView(this.componentRef.hostView);
  }
}
