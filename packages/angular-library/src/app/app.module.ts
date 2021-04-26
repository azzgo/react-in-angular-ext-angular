import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryModule } from 'lib';
import { FormPageComponent } from './form-page/form-page.component';
import { HomePageComponent } from './home-page/home-page.component'
import { NameFormComponent } from './form-page/name-form/name-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    NameFormComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
