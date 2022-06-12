import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Zona} from "../../../models/Zona";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminZonaService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Zona/getAll';
  urleliminar = 'http://localhost:8080/Zona/deleteZona';
  urlsave = 'http://localhost:8080/Zona/saveZona';
  urlupdate = 'http://localhost:8080/Zona/updateZona';

  getZonas(){
    return this.http.get<Zona[]>(this.url);
  }
  deleteZona(zona: Zona){
    return this.http.get<Zona>(this.urleliminar+"/"+zona.idZona);
  }

  registerService(zona: Zona){
    return this.http.post<Zona>(this.urlsave,zona);
  }
  editarZona(zona: Zona){
    return this.http.put<Zona>(this.urlupdate+"/"+zona.idZona,zona);
  }

}

