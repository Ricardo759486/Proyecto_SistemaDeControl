import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TurnoTrabajo} from "../../../models/TurnoTrabajo";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminTurnotrabajoService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/TurnoTrabajo/getAll';

  getTurnoTrabajo(){
    return this.http.get<TurnoTrabajo[]>(this.url);
  }
}
