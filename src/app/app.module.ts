import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloFormComponent } from './hello-form/hello-form.component';
import { AngularLibraryModule } from 'angular-library'

@NgModule({
  declarations: [
    AppComponent,
    HelloFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
