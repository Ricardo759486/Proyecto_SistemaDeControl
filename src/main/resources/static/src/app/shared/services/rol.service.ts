import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserI} from "../models/user.interface";
import {Rol} from "../models/Rol";

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url = 'http://localhost:8080/Rol/getAll';
  constructor(private http:HttpClient) { }

  getRol(){
    return this.http.get<Rol[]>(this.url);
  }
}
