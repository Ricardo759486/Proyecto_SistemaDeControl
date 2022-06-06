import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../shared/services/auth/login.service";
import {compareSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";
import {UserI} from "../../../shared/models/user.interface";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorInicio: boolean= false;
  mensajeError: any="Usuario o contraseña incorrectos";
  loading: boolean =false;
  user: object = {};
  email: string="";
  password: string="";

  constructor(private loginscv:LoginService) { }

  ngOnInit(): void {

  }


  login() {
    let formulary : any = document.getElementById("login");
    let formularyValid:boolean = formulary.reportValidity();
    if (formularyValid){
      this.loading=true;
      this.loginscv.loginService(this.email,this.password).subscribe(
        data => {
          if(data!=null){
            this.minifierSession(data);
          }else{
            this.loading=false;
            this.mensajeError="No se pudo conectar con el servidor";
            this.errorInicio=true;
          }
        })
    }else{
      alert("Por favor ingrese los datos correctamente");
    }
  }

  minifierSession(resultant:any){
    this.user = resultant;

    this.loading=false;
    if(resultant!=null){
      alert("Bienvenido");
      localStorage.setItem("user", JSON.stringify(this.user));
      location.href = "/admin/home";
    }else{
      this.errorInicio=true;
    }

  }

}

