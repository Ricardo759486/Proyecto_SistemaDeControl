import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cuadrilla} from "../../../models/Cuadrilla";

@Injectable({
  providedIn: 'root'
})
export class CuadrillaAdminService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Cuadrilla/getAll';
  urlRegistrar = 'http://localhost:8080/Cuadrilla/registrar';
  getCuadrilla(){
    return this.http.get<Cuadrilla[]>(this.url);
  }

  registerService(cuadrilla: Cuadrilla) {
    console.log(cuadrilla);
    return this.http.post<Cuadrilla>('http://localhost:8080/Cuadrilla/saveCuadrilla/'+cuadrilla.idZona+'/'+cuadrilla.idProveedor+'/'+cuadrilla.idTurnoTrabajo,cuadrilla);
  }
}
