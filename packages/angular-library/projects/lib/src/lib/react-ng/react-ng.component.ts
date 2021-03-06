import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
  Type,
  ViewContainerRef,
} from '@angular/core';
import ReactNgWrapper from './react-ng-wrappers';
import React from 'react';
import ReactDom from 'react-dom';
import {LoadComponentService} from '../load-component.service';

@Component({
  selector: 'lib-react-ng',
  template: '<div></div>',
})
export class ReactNgComponent implements OnChanges {
  constructor(
    private el: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private loadComponentService: LoadComponentService,
  ) {}

  @Input()
  ngComps: Type<any>[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ngComps) {
      const loadComponent = this.loadComponentService.loadComponent(this.viewContainerRef)
      ReactDom.render(
        React.createElement(ReactNgWrapper, {
          ngComps: this.ngComps,
          loadComponent: loadComponent.bind(this.loadComponentService),
        }),
        this.el.nativeElement
      );
    }
  }
}
