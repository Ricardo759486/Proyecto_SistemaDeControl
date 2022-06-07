import { Component, OnInit } from '@angular/core';
import {
  TablaAdminProveedorService
} from "../../../../shared/services/admin/tabla_proveedor/tabla-admin-proveedor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tiposervicio-admin-register',
  templateUrl: './tiposervicio-admin-register.component.html',
  styleUrls: ['./tiposervicio-admin-register.component.scss']
})
export class TiposervicioAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  tiposervicio: any={};
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el tipo de servicio";

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

  register_tiposervicio() {

  }
}
