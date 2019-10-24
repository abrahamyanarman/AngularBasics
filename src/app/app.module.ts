import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {UsersService} from "./shared/services/users.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule


  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
