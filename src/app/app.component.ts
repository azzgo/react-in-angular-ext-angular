import { Component, OnInit } from '@angular/core';
import { HelloFormComponent } from './hello-form/hello-form.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  comps = {hello: HelloFormComponent }

  constructor(){}

  ngOnInit(): void {
  } 
}
