import { AfterContentChecked, Component, ComponentFactoryResolver, ElementRef, Injector, Input, OnInit, ViewContainerRef } from '@angular/core';
import RenderExt from './render-ext'
import React from 'react'
import ReactDom from 'react-dom'


@Component({
  selector: 'app-react-render-wrapper',
  templateUrl: './react-render-wrapper.component.html',
  styleUrls: ['./react-render-wrapper.component.scss']
})
export class ReactRenderWrapperComponent implements AfterContentChecked {
  constructor(
    private el: ElementRef,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }
 

  @Input()
  ngComps: {[key: string]: Component}

  ngAfterContentChecked(): void {
    ReactDom.render(React.createElement(RenderExt, {ngComps: this.ngComps, loadComponent: this.loadComponent.bind(this)}), this.el.nativeElement)
  }

  private  loadComponent(comp: Component, dom: Element) {
    const compFactory = this.componentFactoryResolver.resolveComponentFactory(comp as any)
    const compRef = compFactory.create(this.injector) as any
    const compEl = compRef?.hostView?.rootNodes[0]

    dom?.replaceWith(compEl)
  }

}
