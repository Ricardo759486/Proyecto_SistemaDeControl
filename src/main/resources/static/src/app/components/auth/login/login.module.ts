import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule} from "@angular/forms";
import {HomeModule} from "../../pages/home/home.module";
import {HttpClientModule} from "@angular/common/http";
import {LoginService} from "../../../shared/services/auth/login.service";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HomeModule,
    HttpClientModule,
  ]
})
export class LoginModule { }
