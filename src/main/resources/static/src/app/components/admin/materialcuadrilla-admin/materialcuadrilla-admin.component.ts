import { Component, OnInit } from '@angular/core';
import {Cuadrilla} from "../../../shared/models/Cuadrilla";
import {Material} from "../../../shared/models/Material";
import {CuadrillaAdminService} from "../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";
import {MaterialAdminService} from "../../../shared/services/admin/tabla_material/material-admin.service";
import {Router} from "@angular/router";

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
  material: Material[] = [];

  constructor(private admin_cuadrillascv: CuadrillaAdminService,
              private admin_materialscv: MaterialAdminService, private router:Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
    this.admin_cuadrillascv.getCuadrilla().subscribe(data =>{
      this.cuadrilla = data;
    });
    this.admin_materialscv.getMaterial().subscribe(data =>{
      this.material = data;
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  login() {

  }
}
