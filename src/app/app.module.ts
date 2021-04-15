import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloFormComponent } from './hello-form/hello-form.component';
import { ReactRenderWrapperComponent } from './react-render-wrapper/react-render-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloFormComponent,
    ReactRenderWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
