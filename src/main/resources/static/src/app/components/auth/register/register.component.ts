import { Component, OnInit } from '@angular/core';
import {RegisterService}  from "../../../shared/services/auth/register.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  loading: boolean =false;
  user: any={};
  errorRegister: boolean= false;
  mensajeError: any="Revisa los campos";
  cuadrilla: any;
  zona: any;
  constructor(private registerscv:RegisterService) { }

  ngOnInit(): void {
  }

  register() {
    let formulary : any = document.getElementById("register");
    let formularyValid:boolean = formulary.reportValidity();
    if (formularyValid){
      this.loading=true;
      this.registerscv.registerService(this.user).subscribe(
        data => {
          this.confirmar(data);
        })
    }
  }
  confirmar(resultant:any){
    this.loading=false;
    if(resultant){
      alert("Usuario registrado");
      this.user={};
    }else{
      this.errorRegister=true;
    }
  }
}
