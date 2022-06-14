import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TipoDocumento} from "../../../models/TipoDocumento";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminTipoDocumentoService {
  user : any;
  id : number;
  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Document/getAll';
  urleliminar = 'http://localhost:8080/Document/deleteTipoDocumento';
  urlsave = 'http://localhost:8080/Document/saveTipoDocumento';
  urlupdate = 'http://localhost:8080/Document/updateTipoDocumento';

  getTipoDocumento(){
    return this.http.get<TipoDocumento[]>(this.url);
  }
  deleteTipoDocumento(tipodoc: TipoDocumento){
    return this.http.get<TipoDocumento>(this.urleliminar+"/"+tipodoc.idDocumento+"/"+this.obteneridAdmin());
  }

  editarTipoDocumento(tipodoc: TipoDocumento){
    return this.http.put<TipoDocumento>(this.urlupdate+"/"+tipodoc.idDocumento+"/"+this.obteneridAdmin(),tipodoc);
  }

  registerService(tipodoc: TipoDocumento){
    return this.http.post<TipoDocumento>(this.urlsave+"/"+this.obteneridAdmin(),tipodoc);
  }
  obteneridAdmin(){
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user')??'{}');
    this.id = this.user.idUsuario;
    return this.id;
  }
}
