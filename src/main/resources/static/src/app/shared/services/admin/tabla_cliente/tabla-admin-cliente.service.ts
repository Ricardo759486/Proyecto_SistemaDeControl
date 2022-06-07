import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cliente} from "../../../models/Cliente";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminClienteService {
  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Cliente/getAll';
  urleliminar = 'http://localhost:8080/Cliente/deleteCliente';
  urlsave = 'http://localhost:8080/Cliente/saveCliente';
  getClientes(){
    return this.http.get<Cliente[]>(this.url);
  }
  deleteCliente(cliente: Cliente){
    return this.http.get<Cliente>(this.urleliminar+"/"+cliente.idCliente);
  }


  registerService(cliente: Cliente){
    return this.http.post<Cliente>(this.urlsave,cliente);
  }

}
