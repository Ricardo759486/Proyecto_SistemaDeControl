import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrdenTrabajo} from "../../../models/OrdenTrabajo";
import {Proveedor} from "../../../models/Proveedor";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminOrdentrabajoService {
  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/OrdenTrabajo/getAll';
  urleliminar = 'http://localhost:8080/OrdenTrabajo/deleteOrdenTrabajo';
  urlsave = 'http://localhost:8080/OrdenTrabajo/saveOrdenTrabajo';
  urlupdate = 'http://localhost:8080/OrdenTrabajo/updateOrdenTrabajo';

  getOrdenTrabajos(){
    return this.http.get<OrdenTrabajo[]>(this.url);
  }
  deleteOrdenTrabajo(ordenTrabajo: OrdenTrabajo){
    return this.http.get<OrdenTrabajo>(this.urleliminar+"/"+ordenTrabajo.idOrdenTrabajo);
  }

  registerService(ordenTrabajo: OrdenTrabajo){
    return this.http.post<OrdenTrabajo>(this.urlsave,ordenTrabajo);
  }
  editarOrdenTrabajo(ordenTrabajo: OrdenTrabajo){
    return this.http.put<OrdenTrabajo>(this.urlupdate+"/"+ordenTrabajo.idOrdenTrabajo,ordenTrabajo);
  }
}
