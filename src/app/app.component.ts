import { Component, ElementRef, OnInit } from '@angular/core';
import {createElement} from 'react'
import ReactDom from 'react-dom'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'react-in-angular-ext-angular';

  constructor(private el: ElementRef){}

  ngOnInit(): void {
    ReactDom.render(createElement('span', null,  'hello'), this.el.nativeElement)
  } 
}
