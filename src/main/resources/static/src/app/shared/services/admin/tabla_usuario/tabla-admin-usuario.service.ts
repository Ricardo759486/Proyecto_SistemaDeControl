import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserI} from "../../../models/user.interface";
import {Cuadrilla} from "../../../models/Cuadrilla";
import {Proveedor} from "../../../models/Proveedor";


@Injectable({
  providedIn: 'root'
})
export class TablaAdminUsuarioService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/api/getAll';
  urlEliminar = 'http://localhost:8080/api/deleteUsuario';
  urlupdate = 'http://localhost:8080/api/updateUsuario';

  getUsuario(){
    return this.http.get<UserI[]>(this.url);
  }
  deleteUsuario(usuario: UserI){
    return this.http.get<UserI>(this.urlEliminar+"/"+usuario.idUsuario);
  }
  registerService(usuario: UserI) {
    return this.http.post<UserI>('http://localhost:8080/api/saveUsuario/'+usuario.tipoDoc+'/'+usuario.idCuadrilla+'/'+usuario.idRol,usuario);
  }

  editarUsuario(usuario: UserI){
    return this.http.put<UserI>(this.urlupdate+"/"+usuario.idUsuario,usuario);
  }
}
