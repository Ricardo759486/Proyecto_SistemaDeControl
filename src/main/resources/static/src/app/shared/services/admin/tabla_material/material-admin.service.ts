import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Material} from "../../../models/Material";
import {Cuadrilla} from "../../../models/Cuadrilla";

@Injectable({
  providedIn: 'root'
})
export class MaterialAdminService {
  user : any;
  id : number;
  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Material/getAll';
  urlRegistrar = 'http://localhost:8080/Material/saveMaterial';
  urlEliminar = 'http://localhost:8080/Material/deleteMaterial';
  urlupdate = 'http://localhost:8080/Material/updateMaterial';

  getMaterial(){
    return this.http.get<Material[]>(this.url);
  }
  registerService(material: Material) {
    return this.http.post<Material>(this.urlRegistrar+"/"+this.obteneridAdmin(),material);
  }

  deleteMaterial(material: Material) {
    return this.http.get<Material>(this.urlEliminar+"/"+material.idInventario+"/"+this.obteneridAdmin());
  }

  editarMaterial(material: Material){
    return this.http.put<Material>(this.urlupdate+"/"+material.idInventario+"/"+this.obteneridAdmin(),material);
  }
  obteneridAdmin(){
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user')??'{}');
    this.id = this.user.idUsuario;
    return this.id;
  }
}
