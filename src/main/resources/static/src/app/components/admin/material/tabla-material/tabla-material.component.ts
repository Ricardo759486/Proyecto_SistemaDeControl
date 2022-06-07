import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MaterialAdminService} from "../../../../shared/services/admin/tabla_material/material-admin.service";
import {Material} from "../../../../shared/models/Material";

@Component({
  selector: 'app-tabla-material',
  templateUrl: './tabla-material.component.html',
  styleUrls: ['./tabla-material.component.scss']
})
export class TablaMaterialComponent implements OnInit {

  material: Material[] = [];

  constructor(private tabla_admin_materialscv: MaterialAdminService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_materialscv.getMaterial().subscribe(data =>{
      this.material = data;
    });
  }

  Editar(proveedor: Material) {

  }

  Delete(proveedor: Material) {

  }
}
