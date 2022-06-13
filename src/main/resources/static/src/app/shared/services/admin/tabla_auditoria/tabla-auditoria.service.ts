import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Auditoria} from "../../../models/Auditoria";

@Injectable({
  providedIn: 'root'
})
export class TablaAuditoriaService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Auditoria/getAll';

  getAuditorias(){
    return this.http.get<Auditoria[]>(this.url);
  }
}

