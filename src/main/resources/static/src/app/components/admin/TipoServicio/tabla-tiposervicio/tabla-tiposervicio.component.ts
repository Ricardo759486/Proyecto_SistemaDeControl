import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {
  TablaAdminTiposervicioService
} from "../../../../shared/services/admin/tabla_tiposervicio/tabla-admin-tiposervicio.service";
import {TipoServicio} from "../../../../shared/models/TipoServicio";

@Component({
  selector: 'app-tabla-tiposervicio',
  templateUrl: './tabla-tiposervicio.component.html',
  styleUrls: ['./tabla-tiposervicio.component.scss']
})
export class TablaTiposervicioComponent implements OnInit {

  tiposervicio: TipoServicio[] = [];
  constructor(private tabla_admin_tiposervicioscv: TablaAdminTiposervicioService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_tiposervicioscv.getTipoServicios().subscribe(data =>{
      this.tiposervicio = data;
    });
  }

  Editar(tiposervicio: TipoServicio) {

  }

  Delete(tiposervicio: TipoServicio) {
    this.tabla_admin_tiposervicioscv.deleteTipoServicio(tiposervicio).subscribe(data => {
      this.tiposervicio = this.tiposervicio.filter(p => p !== tiposervicio);
      alert("Proveedor Eliminado");
    })
  }
}
