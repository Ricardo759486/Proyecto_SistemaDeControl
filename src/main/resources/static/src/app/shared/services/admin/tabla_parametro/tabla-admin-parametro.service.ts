import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Parametro} from "../../../models/Parametro";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminParametroService {
  user : any;
  id : number;
  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Parametro/getAll';
  urleliminar = 'http://localhost:8080/Parametro/deleteParametro';
  urlsave = 'http://localhost:8080/Parametro/saveParametro';
  urlupdate = 'http://localhost:8080/Parametro/updateParametro';

  getParametros(){
    return this.http.get<Parametro[]>(this.url);
  }
  deleteParametro(parametro: Parametro){
    return this.http.get<Parametro>(this.urleliminar+"/"+parametro.idParametro +"/"+this.obteneridAdmin());
  }
  editarParametro(parametro: Parametro){
    return this.http.put<Parametro>(this.urlupdate+"/"+parametro.idParametro+"/"+this.obteneridAdmin(),parametro);
  }

  registerService(parametro: Parametro){
    return this.http.post<Parametro>(this.urlsave+"/"+this.obteneridAdmin(),parametro);
  }
  obteneridAdmin(){
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user')??'{}');
    this.id = this.user.idUsuario;
    return this.id;
  }
}
