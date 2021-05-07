import { Component, OnInit } from '@angular/core';
import {NameFormComponent} from './name-form/name-form.component';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: []
})
export class FormPageComponent implements OnInit {
  comps = [NameFormComponent, NameFormComponent];

  constructor() { }

  ngOnInit(): void {
  }

}
