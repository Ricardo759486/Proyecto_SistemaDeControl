import { Component, OnInit } from '@angular/core';
import {
  TablaAdminProveedorService
} from "../../../../shared/services/admin/tabla_proveedor/tabla-admin-proveedor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ordentrabajo-admin',
  templateUrl: './ordentrabajo-admin-register.component.html',
  styleUrls: ['./ordentrabajo-admin-register.component.scss']
})
export class OrdentrabajoAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  ordentrabajo: any={};
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar la orden de trabajo";

  constructor(private  provedorscv: TablaAdminProveedorService, private router:Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  register_ordentrabajo() {

  }
}
