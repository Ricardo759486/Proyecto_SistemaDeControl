import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TipoServicio} from "../../../models/TipoServicio";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminTiposervicioService {
  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/TipoServicio/getAll';
  urleliminar = 'http://localhost:8080/TipoServicio/deleteTipoServicio';
  urlsave = 'http://localhost:8080/TipoServicio/saveTipoServicio';
  urlupdate = 'http://localhost:8080/TipoServicio/updateTipoServicio';

  getTipoServicios(){
    return this.http.get<TipoServicio[]>(this.url);
  }
  deleteTipoServicio(tipoServicio: TipoServicio){
    return this.http.get<TipoServicio>(this.urleliminar+"/"+tipoServicio.idServicio);
  }

  editarProveedor(tipoServicio: TipoServicio){
    return this.http.put<TipoServicio>(this.urlupdate+"/"+tipoServicio.idServicio,tipoServicio);
  }
  registerService(tipoServicio: TipoServicio){
    return this.http.post<TipoServicio>(this.urlsave,tipoServicio);
  }

}
