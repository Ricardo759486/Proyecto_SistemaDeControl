import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserI} from "../../../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminUsuarioService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/api/getAll';

  getUsuario(){
    return this.http.get<UserI[]>(this.url);
  }
}
