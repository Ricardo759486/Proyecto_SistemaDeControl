import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {UserI} from "../../models/user.interface";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  registerService(usuario: UserI) {
    return this.http.post<UserI>('http://localhost:8080/api/saveUsuario/'+usuario.tipoDoc,usuario);
  }

}
