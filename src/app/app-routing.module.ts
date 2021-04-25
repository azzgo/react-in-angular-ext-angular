import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormPageComponent} from './form-page/form-page.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "form", component: FormPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
