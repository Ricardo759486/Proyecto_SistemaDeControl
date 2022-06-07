import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TipoDocumento} from "../../../models/TipoDocumento";
@Injectable({
  providedIn: 'root'
})
export class TablaAdminTipoDocumentoService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Document/getAll';

  getTipoDocumento(){
    return this.http.get<TipoDocumento[]>(this.url);
  }
}
