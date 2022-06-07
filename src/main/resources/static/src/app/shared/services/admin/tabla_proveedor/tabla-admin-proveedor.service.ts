import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Proveedor} from "../../../models/Proveedor";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminProveedorService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Proveedor/getAll';
  urleliminar = 'http://localhost:8080/Proveedor/deleteProveedor';
  urlsave = 'http://localhost:8080/Proveedor/saveProveedor';
  getProveedores(){
    return this.http.get<Proveedor[]>(this.url);
  }
 deleteProveedor(proveedor: Proveedor){
   return this.http.get<Proveedor>(this.urleliminar+"/"+proveedor.idProveedor);
 }


  registerService(proveedor: Proveedor){
    return this.http.post<Proveedor>(this.urlsave,proveedor);
  }

}
