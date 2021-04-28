import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Injector,
  Input,
  OnInit,
  Type,
  ViewContainerRef,
} from '@angular/core';
import ReactNgWrapper from './react-ng-wrappers';
import React from 'react';
import ReactDom from 'react-dom';

@Component({
  selector: 'lib-react-ng',
  template: '<div></div>',
})
export class ReactNgComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  @Input()
  ngComps: Type<any>[];

  ngOnInit(): void {
    ReactDom.render(
      React.createElement(ReactNgWrapper, {
        ngComps: this.ngComps,
        loadComponent: this.loadComponent.bind(this),
      }),
      this.el.nativeElement
    );
  }

  _cacheCompRefs = new WeakMap();

  private loadComponent(
    comp: Component,
    dom: Element,
    callback?: (compRef: ComponentRef<any>) => void
  ) {
    let compRef: ComponentRef<any> = null 
    if (dom?.childNodes.length === 0) {
      const compFactory = this.componentFactoryResolver.resolveComponentFactory(
        comp as any
      );
      const compRef = this.viewContainerRef.createComponent(compFactory);
      const compEl = (compRef?.hostView as any)?.rootNodes[0];
      this._cacheCompRefs.set(compEl, compRef)

      callback && callback(compRef);

      dom?.appendChild(compEl);
    } else if (dom?.childNodes.length > 0) {
      compRef = this._cacheCompRefs.get(dom.childNodes[0])
      callback && callback(compRef);
      compRef.changeDetectorRef.markForCheck()
      compRef.changeDetectorRef.detectChanges()
    }

    return compRef;
  }
}
