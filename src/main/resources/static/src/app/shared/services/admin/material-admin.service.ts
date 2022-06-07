import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Material} from "../../models/Material";

@Injectable({
  providedIn: 'root'
})
export class MaterialAdminService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/Material/getAll';

  getMaterial(){
    return this.http.get<Material[]>(this.url);
  }
}
