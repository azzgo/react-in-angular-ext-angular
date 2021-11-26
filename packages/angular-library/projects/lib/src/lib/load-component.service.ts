import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadComponentService {
  private _viewRefMap = new WeakMap<Element, ViewContainerRef>();
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponent(viewContainerRef: ViewContainerRef) {
    const _cacheCompRefs = new WeakMap();
    const rootDOM: Element = viewContainerRef.element.nativeElement;
    rootDOM.setAttribute('data-key', 'riaxa-container');
    this._viewRefMap.set(rootDOM, viewContainerRef);

    return function (
      comp: Type<any>,
      dom: Element,
      callback?: (compRef: ComponentRef<any>) => void
    ) {
      let compRef: ComponentRef<any> = null;
      if (dom?.childNodes.length === 0) {
        const compFactory =
          this.componentFactoryResolver.resolveComponentFactory(comp as any);

        // not support IE, need noticed
        const viewRef = this._viewRefMap.get(dom.closest('[data-key="riaxa-container"]'));

        if (!viewRef) {
          throw new Error('[Angular-library] viewRef is not existed!')
        }

        const compRef = viewRef.createComponent(compFactory);
        const compEl = (compRef?.hostView as any)?.rootNodes[0];
        _cacheCompRefs.set(compEl, compRef);

        callback && callback(compRef);

        dom?.appendChild(compEl);
      } else if (dom?.childNodes.length > 0) {
        compRef = _cacheCompRefs.get(dom.childNodes[0]);
        callback && callback(compRef);
        compRef.changeDetectorRef.markForCheck();
        compRef.changeDetectorRef.detectChanges();
      }

      return compRef;
    };
  }
}
