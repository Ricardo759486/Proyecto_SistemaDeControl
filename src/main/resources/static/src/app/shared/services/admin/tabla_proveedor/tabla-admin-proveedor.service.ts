import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Proveedor} from "../../../models/Proveedor";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminProveedorService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Proveedor/getAll';

  getProveedores(){
    return this.http.get<Proveedor[]>(this.url);
  }

}
