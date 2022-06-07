import { Component, OnInit } from '@angular/core';
import {TipoDocumento} from "../../../../shared/models/TipoDocumento";
import {Cuadrilla} from "../../../../shared/models/Cuadrilla";
import {Router} from "@angular/router";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";
import {
  TablaAdminTipoDocumentoService
} from "../../../../shared/services/admin/tabla_tipoDocumento/tabla-admin-tipo-documento.service";


@Component({
  selector: 'app-usuario-admin-register',
  templateUrl: './usuario-admin-register.component.html',
  styleUrls: ['./usuario-admin-register.component.scss']
})
export class UsuarioAdminRegisterComponent implements OnInit {
  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  errorInicio: any;
  mensajeError: any;
  loading: any;
  usuario: any={};

  cuadrilla: Cuadrilla[] = [];
  tipoDocumento: TipoDocumento[] = [];

  constructor(private admin_cuadrillascv: CuadrillaAdminService,
              private admin_tipoDocumentoscv: TablaAdminTipoDocumentoService, private router:Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
    this.admin_cuadrillascv.getCuadrilla().subscribe(data =>{
      this.cuadrilla = data;
    });
    this.admin_tipoDocumentoscv.getTipoDocumento().subscribe(data =>{
      this.tipoDocumento = data;
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  register_usuario() {

  }
}
