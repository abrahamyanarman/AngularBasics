import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {UsersService} from "./shared/services/users.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./shared/services/auth.service";
import {SystemModule} from "./system/system.module";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    SystemModule,
    SharedModule,
    BrowserAnimationsModule


  ],
  providers: [UsersService, AuthService],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
