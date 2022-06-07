import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Parametro} from "../../../models/Parametro";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminParametroService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Parametro/getAll';
  urleliminar = 'http://localhost:8080/Parametro/deleteParametro';
  urlsave = 'http://localhost:8080/Parametro/saveParametro';
  getParametros(){
    return this.http.get<Parametro[]>(this.url);
  }
  deleteParametro(parametro: Parametro){
    return this.http.get<Parametro>(this.urleliminar+"/"+parametro.idParametro);
  }


  registerService(parametro: Parametro){
    return this.http.post<Parametro>(this.urlsave,Parametro);
  }

}
