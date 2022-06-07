import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OrdenTrabajo} from "../../../../shared/models/OrdenTrabajo";
import {
  TablaAdminOrdentrabajoService
} from "../../../../shared/services/admin/tabla_ordentrabajo/tabla-admin-ordentrabajo.service";

@Component({
  selector: 'app-tabla-ordentrabajo',
  templateUrl: './tabla-ordentrabajo.component.html',
  styleUrls: ['./tabla-ordentrabajo.component.scss']
})
export class TablaOrdentrabajoComponent implements OnInit {

  ordenTrabajo: OrdenTrabajo[] = [];
  constructor(private tabla_admin_ordenscv: TablaAdminOrdentrabajoService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_ordenscv.getOrdenTrabajos().subscribe(data =>{
      this.ordenTrabajo = data;
    });
  }

  Editar(ordenTrabajo: OrdenTrabajo) {

  }

  Delete(ordenTrabajo: OrdenTrabajo) {
    this.tabla_admin_ordenscv.deleteOrdenTrabajo(ordenTrabajo).subscribe(data => {
      this.ordenTrabajo = this.ordenTrabajo.filter(p => p !== ordenTrabajo);
      alert("Proveedor Eliminado");
    })
  }
}
