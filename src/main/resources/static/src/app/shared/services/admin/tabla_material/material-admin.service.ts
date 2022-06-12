import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Material} from "../../../models/Material";
import {Cuadrilla} from "../../../models/Cuadrilla";

@Injectable({
  providedIn: 'root'
})
export class MaterialAdminService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Material/getAll';
  urlRegistrar = 'http://localhost:8080/Material/deleteMaterial';
  urlEliminar = 'http://localhost:8080/Material/saveMaterial';
  urlupdate = 'http://localhost:8080/Material/updateMaterial';

  getMaterial(){
    return this.http.get<Material[]>(this.url);
  }
  registerService(material: Material) {
    return this.http.post<Material>(this.urlRegistrar,material);
  }

  deleteMaterial(material: Material) {
    return this.http.get<Material>(this.urlEliminar+"/"+material.idInventario);
  }

  editarMaterial(material: Material){
    return this.http.put<Material>(this.urlupdate+"/"+material.idInventario,material);
  }

}
