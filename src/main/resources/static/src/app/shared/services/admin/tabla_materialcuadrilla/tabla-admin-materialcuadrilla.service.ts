import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MaterialCuadrilla} from "../../../models/MaterialCuadrilla";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminMaterialcuadrillaService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/MaterialCuadrilla/getAll';
  urleliminar = 'http://localhost:8080/MaterialCuadrilla/deleteMaterialCuadrilla';
  urlsave = 'http://localhost:8080/MaterialCuadrilla/saveMaterialCuadrilla';

  getMaterialesCuadrilla(){
    return this.http.get<MaterialCuadrilla[]>(this.url);
  }
  deleteMaterialCuadrilla(matCuadrilla: MaterialCuadrilla){
    return this.http.get<MaterialCuadrilla>(this.urleliminar+"/"+matCuadrilla.idRegistro);
  }

  registerService(matCuadrilla: MaterialCuadrilla){
    return this.http.post<MaterialCuadrilla>(this.urlsave,matCuadrilla);
  }

}
