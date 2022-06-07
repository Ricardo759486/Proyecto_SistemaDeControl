import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cuadrilla} from "../../../models/Cuadrilla";
import {Proveedor} from "../../../models/Proveedor";

@Injectable({
  providedIn: 'root'
})
export class CuadrillaAdminService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Cuadrilla/getAll';
  urlRegistrar = 'http://localhost:8080/Cuadrilla/registrar';
  urlEliminar = 'http://localhost:8080/Cuadrilla/deleteCuadrilla';
  getCuadrilla(){
    return this.http.get<Cuadrilla[]>(this.url);
  }

  registerService(cuadrilla: Cuadrilla) {
    return this.http.post<Cuadrilla>('http://localhost:8080/Cuadrilla/saveCuadrilla/'+cuadrilla.idZona+'/'+cuadrilla.idProveedor+'/'+cuadrilla.idTurnoTrabajo,cuadrilla);
  }

  deleteProveedor(cuadrilla: Cuadrilla) {
    return this.http.get<Proveedor>(this.urlEliminar+"/"+cuadrilla.idCuadrilla);

  }
}
