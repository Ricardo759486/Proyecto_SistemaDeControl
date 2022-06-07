import { Component, OnInit } from '@angular/core';
import {TipoDocumento} from "../../../../shared/models/TipoDocumento";
import {Cuadrilla} from "../../../../shared/models/Cuadrilla";
import {Router} from "@angular/router";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";
import {
  TablaAdminTipoDocumentoService
} from "../../../../shared/services/admin/tabla_tipoDocumento/tabla-admin-tipo-documento.service";
import {TablaAdminUsuarioService} from "../../../../shared/services/admin/tabla_usuario/tabla-admin-usuario.service";
import {Rol} from "../../../../shared/models/Rol";
import {RolService} from "../../../../shared/services/rol.service";


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
  rol: Rol[] = [];

  constructor(private usuarioSvc:TablaAdminUsuarioService, private admin_cuadrillascv: CuadrillaAdminService,
              private admin_tipoDocumentoscv: TablaAdminTipoDocumentoService, private rolSvc: RolService, private router:Router) { }

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
    this.rolSvc.getRol().subscribe(data =>{
      this.rol = data;
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  register_usuario() {
    let formulary : any = document.getElementById("register_usuario");
    let formularyValid:boolean = formulary.reportValidity();
    if (formularyValid){
      console.log(this.usuario);
      this.loading=true;
      this.usuarioSvc.registerService(this.usuario).subscribe(
        data => {
          this.confirmar(data);
        })
    }
  }


  confirmar(resultant:any){
    this.loading=false;
    if(resultant){
      alert("Proveedor registrado");
      this.usuario={};
    }else{
      this.errorInicio=true;
    }
  }
}
