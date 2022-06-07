import { Component, OnInit } from '@angular/core';
import {Cuadrilla} from "../../../shared/models/Cuadrilla";
import {CuadrillaAdminService} from "../../../shared/services/admin/cuadrilla-admin.service";
import {Router} from "@angular/router";
import {TablaAdminProveedorService} from "../../../shared/services/admin/tabla-admin-proveedor.service";

@Component({
  selector: 'app-materialcuadrilla-admin',
  templateUrl: './materialcuadrilla-admin.component.html',
  styleUrls: ['./materialcuadrilla-admin.component.scss']
})
export class MaterialcuadrillaAdminComponent implements OnInit {
  user: any={};
  Cuadrilla: any;
  Material: any;
  Cantidad: any;
  errorInicio: any;
  mensajeError: any;
  loading: any;
  sideBarOpen: any;

  cuadrilla: Cuadrilla[] = [];

  constructor(private admin_cuadrillascv: CuadrillaAdminService, private router:Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
    this.admin_cuadrillascv.getCuadrilla().subscribe(data =>{
      this.cuadrilla = data;
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  login() {

  }
}
