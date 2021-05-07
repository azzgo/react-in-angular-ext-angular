import { NgModule } from '@angular/core';
import {LoadComponentService} from './load-component.service';
import { ReactNgComponent } from './react-ng/react-ng.component'


@NgModule({
  declarations: [
    ReactNgComponent
  ],
  exports: [
    ReactNgComponent
  ],
  entryComponents: [
    ReactNgComponent
  ],
  providers: [
    LoadComponentService,
  ]
})
export class LibraryModule { }
