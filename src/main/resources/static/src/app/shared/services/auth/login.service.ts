import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {UserI} from "../../models/user.interface";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  loginService(email:string,password:string){

    return this.http.get('http://localhost:8080/Autenticacion/validarLogin/'+email+'/'+password, {responseType: 'json'});

}
  verificarClave(user:UserI){

    return this.http.get('http://localhost:8080/Autenticacion/validarFecha/'+user.idUsuario, {responseType: 'text'});

  }
}
