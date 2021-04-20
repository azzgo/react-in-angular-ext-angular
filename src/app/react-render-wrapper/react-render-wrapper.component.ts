import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import RenderExt from './render-ext';
import React from 'react';
import ReactDom from 'react-dom';

@Component({
  selector: 'app-react-render-wrapper',
  template: '<div></div>',
})
export class ReactRenderWrapperComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  @Input()
  ngComps: { [key: string]: Component };

  ngOnInit(): void {
    ReactDom.render(
      React.createElement(RenderExt, {
        ngComps: this.ngComps,
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

    dom?.appendChild(compEl);

    return compRef;
  }
}
