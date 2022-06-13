import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cliente} from "../../../models/Cliente";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminClienteService {
  user : any;
  id : number;
  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Cliente/getAll';
  urleliminar = 'http://localhost:8080/Cliente/deleteCliente';
  urlsave = 'http://localhost:8080/Cliente/saveCliente';
  urlupdate = 'http://localhost:8080/Cliente/updateCliente';
  getClientes(){
    return this.http.get<Cliente[]>(this.url);
  }
  deleteCliente(cliente: Cliente){
    return this.http.get<Cliente>(this.urleliminar+"/"+cliente.idCliente+"/"+this.obteneridAdmin());
  }

  editarCliente(cliente: Cliente){
    return this.http.put<Cliente>(this.urlupdate+"/"+cliente.idCliente+"/"+cliente.tipoDoc+"/"+this.obteneridAdmin(),cliente);
  }

  registerService(cliente: Cliente){
    console.log(cliente);
    return this.http.post<Cliente>(this.urlsave+"/"+cliente.tipoDoc+"/"+this.obteneridAdmin(),cliente);
  }

  obteneridAdmin(){
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user')??'{}');
    this.id = this.user.idUsuario;
    return this.id;
  }
}
