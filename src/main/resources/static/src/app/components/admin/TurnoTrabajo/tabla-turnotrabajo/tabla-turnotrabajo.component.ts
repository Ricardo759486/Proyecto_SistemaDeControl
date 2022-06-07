import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TurnoTrabajo} from "../../../../shared/models/TurnoTrabajo";
import {
  TablaAdminTurnotrabajoService
} from "../../../../shared/services/admin/tabla_turnotrabajo/tabla-admin-turnotrabajo.service";

@Component({
  selector: 'app-tabla-turnotrabajo',
  templateUrl: './tabla-turnotrabajo.component.html',
  styleUrls: ['./tabla-turnotrabajo.component.scss']
})
export class TablaTurnotrabajoComponent implements OnInit {

  turnotrabajo: TurnoTrabajo[] = [];
  constructor(private tabla_admin_turnotrabajoscv: TablaAdminTurnotrabajoService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_turnotrabajoscv.getTurnoTrabajo().subscribe(data =>{
      this.turnotrabajo = data;
    });
  }

  Editar(turnotrabajo: TurnoTrabajo) {

  }

  Delete(turnotrabajo: TurnoTrabajo) {
    this.tabla_admin_turnotrabajoscv.deleteTurnoTrabajo(turnotrabajo).subscribe(data => {
      this.turnotrabajo = this.turnotrabajo.filter(p => p !== turnotrabajo);
      alert("Proveedor Eliminado");
    })
  }
}
