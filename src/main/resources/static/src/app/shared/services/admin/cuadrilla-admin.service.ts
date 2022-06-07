import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cuadrilla} from "../../models/Cuadrilla";

@Injectable({
  providedIn: 'root'
})
export class CuadrillaAdminService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Cuadrilla/getAll';

  getCuadrilla(){
    return this.http.get<Cuadrilla[]>(this.url);
  }
}
