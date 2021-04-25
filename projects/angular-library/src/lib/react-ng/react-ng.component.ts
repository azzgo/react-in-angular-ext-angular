import {
  Component,
  ComponentFactoryResolver,
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
  ngComp: Type<any>;

  ngOnInit(): void {
    ReactDom.render(
      React.createElement(ReactNgWrapper, {
        ngComp: this.ngComp,
        loadComponent: this.loadComponent.bind(this),
      }),
      this.el.nativeElement
    );
  }

  private loadComponent(comp: Component, dom: Element) {
    const compFactory = this.componentFactoryResolver.resolveComponentFactory(
      comp as any
    );
    const compRef = this.viewContainerRef.createComponent(compFactory);
    const compEl = (compRef?.hostView as any)?.rootNodes[0];

    if (dom?.childNodes.length > 0) {
      dom.replaceChild(compEl, dom.childNodes[0])
    } else {
      dom?.appendChild(compEl);
    }

    return compRef;
  }
}
