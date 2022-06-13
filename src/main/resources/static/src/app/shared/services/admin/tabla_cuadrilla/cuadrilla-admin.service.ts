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
  urlRegistrar = 'http://localhost:8080/Cuadrilla/saveCuadrilla';
  urlEliminar = 'http://localhost:8080/Cuadrilla/deleteCuadrilla';
  urlupdate = 'http://localhost:8080/Cuadrilla/updateCuadrilla';

  getCuadrilla(){
    return this.http.get<Cuadrilla[]>(this.url);
  }

  registerService(cuadrilla: Cuadrilla) {
    return this.http.post<Cuadrilla>(this.urlRegistrar+"/"+cuadrilla.idZona+"/"+cuadrilla.idProveedor+"/"+cuadrilla.idTurnoTrabajo,cuadrilla);
  }

  deleteCuadrilla(cuadrilla: Cuadrilla) {
    return this.http.get<Cuadrilla>(this.urlEliminar+"/"+cuadrilla.idCuadrilla);
  }

  editarCuadrilla(cuadrilla: Cuadrilla){
    return this.http.put<Cuadrilla>(this.urlupdate+"/"+cuadrilla.idCuadrilla+"/"+cuadrilla.idZona+"/"+cuadrilla.idProveedor+"/"+cuadrilla.idTurnoTrabajo,cuadrilla);
  }

}
