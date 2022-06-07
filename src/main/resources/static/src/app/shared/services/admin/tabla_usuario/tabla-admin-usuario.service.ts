import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserI} from "../../../models/user.interface";


@Injectable({
  providedIn: 'root'
})
export class TablaAdminUsuarioService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/api/getAll';
  urlEliminar = 'http://localhost:8080/api/deleteUser';

  getUsuario(){
    return this.http.get<UserI[]>(this.url);
  }
  deleteUsuario(usuario: UserI){
    return this.http.get<UserI>(this.urlEliminar+"/"+usuario.idUsuario);
  }
}
