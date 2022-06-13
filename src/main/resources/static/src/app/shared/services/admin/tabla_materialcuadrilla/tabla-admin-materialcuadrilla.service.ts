import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MaterialCuadrilla} from "../../../models/MaterialCuadrilla";
import {Proveedor} from "../../../models/Proveedor";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminMaterialcuadrillaService {
  user : any;
  id : number;
  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/MaterialCuadrilla/getAll';
  urleliminar = 'http://localhost:8080/MaterialCuadrilla/deleteMaterialCuadrilla';
  urlsave = 'http://localhost:8080/MaterialCuadrilla/saveMaterialCuadrilla';
  urlupdate = 'http://localhost:8080/MaterialCuadrilla/updateMaterialCuadrilla';

  getMaterialesCuadrilla(){
    return this.http.get<MaterialCuadrilla[]>(this.url);
  }
  deleteMaterialCuadrilla(matCuadrilla: MaterialCuadrilla){
    return this.http.get<MaterialCuadrilla>(this.urleliminar+"/"+matCuadrilla.idRegistro+"/"+this.obteneridAdmin());
  }

  registerService(matCuadrilla: MaterialCuadrilla){
    return this.http.post<MaterialCuadrilla>(this.urlsave+"/"+matCuadrilla.idCuadrilla+"/"+matCuadrilla.idMaterial+"/"+this.obteneridAdmin(),matCuadrilla);
  }

  editarMaterialCuadrilla(matCuadrilla: MaterialCuadrilla){
    return this.http.put<MaterialCuadrilla>(this.urlupdate+"/"+matCuadrilla.idRegistro+"/"+matCuadrilla.idCuadrilla+"/"+matCuadrilla.idMaterial+"/"+this.obteneridAdmin(),matCuadrilla);
  }
  obteneridAdmin(){
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user')??'{}');
    this.id = this.user.idUsuario;
    return this.id;
  }
}
