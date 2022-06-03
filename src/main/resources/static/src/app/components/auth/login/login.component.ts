import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../shared/services/auth/login.service";
import {compareSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorInicio: boolean= false;
  mensajeError: any="Usuario o contraseña incorrectos";
  loading: boolean =false;
  user: any={};

  constructor(private loginscv:LoginService) { }

  ngOnInit(): void {

  }


  login() {
    let formulary : any = document.getElementById("login");
    let formularyValid:boolean = formulary.reportValidity();
    if (formularyValid){
      this.loading=true;
      this.loginscv.loginService(this.user).subscribe(
        data => {
          this.minifierSession(data);
        })
    }
    console.log(this.user);
  }

  minifierSession(resultant:any){
    this.loading=false;
    if(resultant){
      localStorage.setItem('user', JSON.stringify(resultant));
      location.href = "/admin";
    }else{
      this.errorInicio=true;
    }

  }

}

