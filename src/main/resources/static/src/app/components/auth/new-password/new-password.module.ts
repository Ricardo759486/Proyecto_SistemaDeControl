import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPasswordRoutingModule } from './new-password-routing.module';
import { NewPasswordComponent } from './new-password.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NewPasswordComponent
  ],
    imports: [
        CommonModule,
        NewPasswordRoutingModule,
        FormsModule
    ]
})
export class NewPasswordModule { }
