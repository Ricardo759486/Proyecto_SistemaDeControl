import { Component, OnInit } from '@angular/core';
import {
  TablaAdminProveedorService
} from "../../../../shared/services/admin/tabla_proveedor/tabla-admin-proveedor.service";
import {Router} from "@angular/router";
import {TablaAdminZonaService} from "../../../../shared/services/admin/tabla_zona/tabla-admin-zona.service";

@Component({
  selector: 'app-zona-admin',
  templateUrl: './zona-admin-register.component.html',
  styleUrls: ['./zona-admin-register.component.scss']
})
export class ZonaAdminRegisterComponent implements OnInit {

  user: any = {};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  zona: any = {};
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el proveedor";

  constructor(private zonascv: TablaAdminZonaService, private router: Router) {
  }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if (!this.user) {
      location.href = "/";
    }
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  register_zona() {

  }
}
