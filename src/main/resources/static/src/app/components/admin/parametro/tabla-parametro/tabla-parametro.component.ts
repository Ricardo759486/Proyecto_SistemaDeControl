import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Parametro} from "../../../../shared/models/Parametro";
import {
  TablaAdminParametroService
} from "../../../../shared/services/admin/tabla_parametro/tabla-admin-parametro.service";

@Component({
  selector: 'app-tabla-parametro',
  templateUrl: './tabla-parametro.component.html',
  styleUrls: ['./tabla-parametro.component.scss']
})
export class TablaParametroComponent implements OnInit {

  parametro: Parametro[] = [];
  constructor(private tabla_admin_parametroscv: TablaAdminParametroService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_parametroscv.getParametros().subscribe(data =>{
      this.parametro = data;
    });
  }

  Editar(proveedor: Parametro) {

  }

  Delete(parametro: Parametro) {
    this.tabla_admin_parametroscv.deleteParametro(parametro).subscribe(data => {
      this.parametro = this.parametro.filter(p => p !== parametro);
      alert("Parametro Eliminado");
    })
  }
}
