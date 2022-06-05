import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  loginService(email:string,password:string){

    return this.http.get('http://localhost:8080/Autenticacion/validarLogin/'+email+'/'+password, {responseType: 'text'});

}
}
