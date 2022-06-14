import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TurnoTrabajo} from "../../../models/TurnoTrabajo";

@Injectable({
  providedIn: 'root'
})
export class TablaAdminTurnotrabajoService {
  user : any;
  id : number;
  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/TurnoTrabajo/getAll';
  urleliminar = 'http://localhost:8080/TurnoTrabajo/deleteTurnoTrabajo';
  urlsave = 'http://localhost:8080/TurnoTrabajo/saveTurnoTrabajo';
  urlupdate = 'http://localhost:8080/TurnoTrabajo/updateTurnoTrabajo';

  getTurnoTrabajo(){
    return this.http.get<TurnoTrabajo[]>(this.url);
  }

  deleteTurnoTrabajo(turnoTrabajo: TurnoTrabajo){
    return this.http.get<TurnoTrabajo>(this.urleliminar+"/"+turnoTrabajo.idTurno+"/"+this.obteneridAdmin());
  }

  registerService(turnoTrabajo: TurnoTrabajo){
    return this.http.post<TurnoTrabajo>(this.urlsave+"/"+this.obteneridAdmin(),turnoTrabajo);
  }
  editarTurnoTrabajo(turnoTrabajo: TurnoTrabajo){
    return this.http.put<TurnoTrabajo>(this.urlupdate+"/"+turnoTrabajo.idTurno+"/"+this.obteneridAdmin(),turnoTrabajo);
  }
  obteneridAdmin(){
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user')??'{}');
    this.id = this.user.idUsuario;
    return this.id;
  }
}

