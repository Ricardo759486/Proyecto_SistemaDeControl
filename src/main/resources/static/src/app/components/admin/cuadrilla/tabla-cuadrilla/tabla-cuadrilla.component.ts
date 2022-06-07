import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Cuadrilla} from "../../../../shared/models/Cuadrilla";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";

@Component({
  selector: 'app-tabla-cuadrilla',
  templateUrl: './tabla-cuadrilla.component.html',
  styleUrls: ['./tabla-cuadrilla.component.scss']
})
export class TablaCuadrillaComponent implements OnInit {

  cuadrilla: Cuadrilla[] = [];
  constructor(private tabla_admin_cuadrillascv: CuadrillaAdminService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_cuadrillascv.getCuadrilla().subscribe(data =>{
      this.cuadrilla = data;
    });
  }


}
