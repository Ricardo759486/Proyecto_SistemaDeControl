import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TablaAdminUsuarioService} from "../../../../shared/services/admin/tabla_usuario/tabla-admin-usuario.service";
import {UserI} from "../../../../shared/models/user.interface";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TipoDocumento} from "../../../../shared/models/TipoDocumento";
import {Cuadrilla} from "../../../../shared/models/Cuadrilla";
import {Rol} from "../../../../shared/models/Rol";
import {
  TablaAdminTipoDocumentoService
} from "../../../../shared/services/admin/tabla_tipoDocumento/tabla-admin-tipo-documento.service";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";
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
  loading: any;
  usuario: UserI [] = [];
  tipoDocumento: TipoDocumento[] = [];
  cuadrilla: Cuadrilla[] = [];
  rol: Rol[] = [];
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el usuario";

  constructor(private usuarioSvc:TablaAdminUsuarioService,
              private  tipoDocumentocv: TablaAdminTipoDocumentoService,
              private  cuadrillacv: CuadrillaAdminService,
              private  rolcv: RolService,
              private router:Router,public dialog: MatDialog) { }

  public newUsuario = new FormGroup({
    login: new FormControl('', [Validators.required,Validators.email]),
    clave: new FormControl('', Validators.required),
    tipoDoc: new FormControl('', Validators.required),
    identificacion: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    idCuadrilla: new FormControl('', Validators.required),
    idRol: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
    this.tipoDocumentocv.getTipoDocumento().subscribe(data =>{
      this.tipoDocumento = data;
    });
    this.cuadrillacv.getCuadrilla().subscribe(data =>{
      this.cuadrilla = data;
    });
    this.rolcv.getRol().subscribe(data =>{
      this.rol = data;
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  confirmar(resultant:UserI){
    this.loading=false;
    if(resultant){
      alert("Usuario registrado");
      this.dialog.closeAll();
      this.usuario=[];
      location.href = "/admin/usuario_admin";
    }else{
      alert("No se pudo registrar el usuario");
    }
  }

  register_usuario(usuario: UserI){ {
    this.loading=true;

    if ( this.newUsuario.valid) {
      this.usuarioSvc.registerService(usuario).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo registrar el usuario");
      this.loading=false;
    }
  }
  }
}
