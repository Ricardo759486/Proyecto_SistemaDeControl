import { Component, OnInit } from '@angular/core';
import {Proveedor} from "../../../../shared/models/Proveedor";
import {TablaAdminProveedorService} from "../../../../shared/services/admin/tabla_proveedor/tabla-admin-proveedor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabla-proveedor',
  templateUrl: './tabla-proveedor.component.html',
  styleUrls: ['./tabla-proveedor.component.scss']
})
export class TablaProveedorComponent implements OnInit {

  proveedor: Proveedor[] = [];
  constructor(private tabla_admin_provvedorscv: TablaAdminProveedorService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_provvedorscv.getProveedores().subscribe(data =>{
      this.proveedor = data;
    });
  }

  Editar(proveedor: Proveedor) {

  }

  Delete(proveedor: Proveedor) {

  }
}
