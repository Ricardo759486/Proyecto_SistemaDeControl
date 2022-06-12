import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Telefono} from "../../../models/Telefono";
import {Proveedor} from "../../../models/Proveedor";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminTelefonoService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Telefono/getAll';
  urleliminar = 'http://localhost:8080/Telefono/deleteTelefono';
  urlsave = 'http://localhost:8080/Telefono/saveTelefono';
  urlupdate = 'http://localhost:8080/Telefono/updateTelefono';
  getTelefonos(){
    return this.http.get<Telefono[]>(this.url);
  }
  deleteTelefono(telefono: Telefono){
    return this.http.get<Telefono>(this.urleliminar+"/"+telefono.idTelefono);
  }

  registerService(telefono: Telefono){
    return this.http.post<Telefono>(this.urlsave,telefono);
  }

  editarTelefono(telefono: Telefono){
    return this.http.put<Telefono>(this.urlupdate+"/"+telefono.idTelefono,telefono);
  }

}
