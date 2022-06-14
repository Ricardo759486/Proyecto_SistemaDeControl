import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Proveedor} from "../../../models/Proveedor";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminProveedorService {
  user : any;
  id : number;
  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Proveedor/getAll';
  urleliminar = 'http://localhost:8080/Proveedor/deleteProveedor';
  urlsave = 'http://localhost:8080/Proveedor/saveProveedor';
  urlupdate = 'http://localhost:8080/Proveedor/updateProveedor';

  getProveedores(){
    return this.http.get<Proveedor[]>(this.url);
  }
 deleteProveedor(proveedor: Proveedor){
   return this.http.get<Proveedor>(this.urleliminar+"/"+proveedor.idProveedor+"/"+this.obteneridAdmin());
 }

  registerService(proveedor: Proveedor){
    return this.http.post<Proveedor>(this.urlsave+"/"+this.obteneridAdmin(),proveedor);
  }
  editarProveedor(proveedor: Proveedor){
    return this.http.put<Proveedor>(this.urlupdate+"/"+proveedor.idProveedor+"/"+this.obteneridAdmin(),proveedor);
  }
  obteneridAdmin(){
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user')??'{}');
    this.id = this.user.idUsuario;
    return this.id;
  }
}
