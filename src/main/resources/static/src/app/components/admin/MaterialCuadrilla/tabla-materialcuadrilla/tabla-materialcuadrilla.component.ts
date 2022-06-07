import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MaterialCuadrilla} from "../../../../shared/models/MaterialCuadrilla";
import {
  TablaAdminMaterialcuadrillaService
} from "../../../../shared/services/admin/tabla_materialcuadrilla/tabla-admin-materialcuadrilla.service";

@Component({
  selector: 'app-tabla-materialcuadrilla',
  templateUrl: './tabla-materialcuadrilla.component.html',
  styleUrls: ['./tabla-materialcuadrilla.component.scss']
})
export class TablaMaterialcuadrillaComponent implements OnInit {

  materialcuadrilla: MaterialCuadrilla[] = [];
  constructor(private tabla_admin_materialcuadrillascv: TablaAdminMaterialcuadrillaService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_materialcuadrillascv.getMaterialesCuadrilla().subscribe(data =>{
      this.materialcuadrilla = data;
    });
  }

  Editar(materialCuadrillas: MaterialCuadrilla) {

  }

  Delete(materialcuadrilla: MaterialCuadrilla) {
    this.tabla_admin_materialcuadrillascv.deleteMaterialCuadrilla(materialcuadrilla).subscribe(data => {
      this.materialcuadrilla = this.materialcuadrilla.filter(p => p !== materialcuadrilla);
      alert("Proveedor Eliminado");
    })
  }
}
