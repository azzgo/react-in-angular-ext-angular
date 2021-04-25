import { Component, OnInit } from '@angular/core';
import {NameFormComponent} from './name-form/name-form.component';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  comp = NameFormComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
