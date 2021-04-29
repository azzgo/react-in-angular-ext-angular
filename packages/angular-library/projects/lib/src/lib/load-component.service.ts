import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadComponentService {
  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}


  loadComponent(
    viewContainerRef: ViewContainerRef,
  ) {

    const _cacheCompRefs = new WeakMap();

    return function(
      comp: Type<any>,
      dom: Element,
      callback?: (compRef: ComponentRef<any>) => void
    ) {
      let compRef: ComponentRef<any> = null;
      if (dom?.childNodes.length === 0) {
        const compFactory = this.componentFactoryResolver.resolveComponentFactory(
          comp as any
        );
        const compRef = viewContainerRef.createComponent(compFactory);
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
    }
  }
}
