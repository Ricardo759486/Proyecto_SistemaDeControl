import { Component, OnInit } from '@angular/core';
import {
  TablaAdminProveedorService
} from "../../../../shared/services/admin/tabla_proveedor/tabla-admin-proveedor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tipodocumento-admin-register',
  templateUrl: './tipodocumento-admin-register.component.html',
  styleUrls: ['./tipodocumento-admin-register.component.scss']
})
export class TipodocumentoAdminRegisterComponent implements OnInit {

  user: any = {};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  tipodocumento: any = {};
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el proveedor";

  constructor(private provedorscv: TablaAdminProveedorService, private router: Router) {
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

  register_tipodocumento() {

  }
}
