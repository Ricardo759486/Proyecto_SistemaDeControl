import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TipoServicio} from "../../../models/TipoServicio";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminTiposervicioService {
  user : any;
  id : number;
  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/TipoServicio/getAll';
  urleliminar = 'http://localhost:8080/TipoServicio/deleteTipoServicio';
  urlsave = 'http://localhost:8080/TipoServicio/saveTipoServicio';
  urlupdate = 'http://localhost:8080/TipoServicio/updateTipoServicio';

  getTipoServicios(){
    return this.http.get<TipoServicio[]>(this.url);
  }
  deleteTipoServicio(tipoServicio: TipoServicio){
    return this.http.get<TipoServicio>(this.urleliminar+"/"+tipoServicio.idServicio+"/"+this.obteneridAdmin());
  }

  editarProveedor(tipoServicio: TipoServicio){
    return this.http.put<TipoServicio>(this.urlupdate+"/"+tipoServicio.idServicio+"/"+this.obteneridAdmin(),tipoServicio);
  }
  registerService(tipoServicio: TipoServicio){
    return this.http.post<TipoServicio>(this.urlsave+"/"+this.obteneridAdmin(),tipoServicio);
  }
  obteneridAdmin(){
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user')??'{}');
    this.id = this.user.idUsuario;
    return this.id;
  }
}
