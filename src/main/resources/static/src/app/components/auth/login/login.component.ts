import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../shared/services/auth/login.service";
import {compareSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";
import {UserI} from "../../../shared/models/user.interface";
import {TablaAdminUsuarioService} from "../../../shared/services/admin/tabla_usuario/tabla-admin-usuario.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorInicio: boolean= false;
  mensajeError: any="Usuario o contraseña incorrectos";
  loading: boolean =false;
  useri:UserI[]=[]
  user: any = {};
  email: string="";
  password: string="";

  constructor(private loginscv:LoginService, private router:Router) { }

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
            this.mensajeError="Credenciales incorrectas";
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

      localStorage.setItem("user", JSON.stringify(this.user));

      this.useri = JSON.parse(localStorage.getItem('user')??'{}');
      alert("Bienvenido");
      this.verificarClave(this.useri);


    }else{
      this.errorInicio=true;
    }

  }
  verificarClave(user:any){
    this.loginscv.verificarClave(user).subscribe(data =>{
      user = data;
      console.log(data);
    });
    location.href = "/admin/home";
    if (user =='SI'){
      console.log("SI");
      location.href = "/admin/home";

    }else{
    }
  }

}

