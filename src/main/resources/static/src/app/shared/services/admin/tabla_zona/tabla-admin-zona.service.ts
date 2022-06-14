import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Zona} from "../../../models/Zona";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminZonaService {
  user : any;
  id : number;
  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Zona/getAll';
  urleliminar = 'http://localhost:8080/Zona/deleteZona';
  urlsave = 'http://localhost:8080/Zona/saveZona';
  urlupdate = 'http://localhost:8080/Zona/updateZona';

  getZonas(){
    return this.http.get<Zona[]>(this.url);
  }
  deleteZona(zona: Zona){
    return this.http.get<Zona>(this.urleliminar+"/"+zona.idZona+"/"+this.obteneridAdmin());
  }

  registerService(zona: Zona){
    return this.http.post<Zona>(this.urlsave+"/"+this.obteneridAdmin(),zona);
  }
  editarZona(zona: Zona){
    return this.http.put<Zona>(this.urlupdate+"/"+zona.idZona+"/"+this.obteneridAdmin(),zona);
  }
  obteneridAdmin(){
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user')??'{}');
    this.id = this.user.idUsuario;
    return this.id;
  }
}

