import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {FormsModule} from "@angular/forms";
import {HomeModule} from "../../pages/home/home.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    HomeModule,
    HttpClientModule,
  ]
})
export class RegisterModule { }
