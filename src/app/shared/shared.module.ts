import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {LoaderComponent} from "./components/loader/loader.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LoaderComponent,
    NotFoundComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule,
    RouterModule
  ],

  exports:[
    ReactiveFormsModule,
    FormsModule,
    LoaderComponent],
})
export class SharedModule{

}
