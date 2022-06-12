import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TipoDocumento} from "../../../models/TipoDocumento";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminTipoDocumentoService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Document/getAll';
  urleliminar = 'http://localhost:8080/Document/deleteTipoDocumento';
  urlsave = 'http://localhost:8080/Document/saveTipoDocumento';
  urlupdate = 'http://localhost:8080/Proveedor/updateTipoDocumento';

  getTipoDocumento(){
    return this.http.get<TipoDocumento[]>(this.url);
  }
  deleteTipoDocumento(tipodoc: TipoDocumento){
    return this.http.get<TipoDocumento>(this.urleliminar+"/"+tipodoc.idDocumento);
  }

  editarTipoDocumento(tipodoc: TipoDocumento){
    return this.http.put<TipoDocumento>(this.urlupdate+"/"+tipodoc.idDocumento,tipodoc);
  }

  registerService(tipodoc: TipoDocumento){
    return this.http.post<TipoDocumento>(this.urlsave,tipodoc);
  }

}
