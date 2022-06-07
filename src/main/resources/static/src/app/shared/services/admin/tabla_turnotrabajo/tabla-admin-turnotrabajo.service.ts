import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TurnoTrabajo} from "../../../models/TurnoTrabajo";
import {MaterialCuadrilla} from "../../../models/MaterialCuadrilla";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminTurnotrabajoService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/TurnoTrabajo/getAll';
  urleliminar = 'http://localhost:8080/TurnoTrabajo/deleteTurnoTrabajo';
  urlsave = 'http://localhost:8080/TurnoTrabajo/saveTurnoTrabajo';

  getTurnoTrabajo(){
    return this.http.get<TurnoTrabajo[]>(this.url);
  }

  deleteTurnoTrabajo(turnoTrabajo: TurnoTrabajo){
    return this.http.get<MaterialCuadrilla>(this.urleliminar+"/"+turnoTrabajo.idTurno);
  }

  registerService(turnoTrabajo: TurnoTrabajo){
    return this.http.post<TurnoTrabajo>(this.urlsave,turnoTrabajo);
  }
}

