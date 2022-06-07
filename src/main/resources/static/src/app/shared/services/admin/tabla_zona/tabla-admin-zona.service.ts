import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Zona} from "../../../models/Zona";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminZonaService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Zona/getAll';

  getZona(){
    return this.http.get<Zona[]>(this.url);
  }
}
