import {Component, Input, OnInit} from '@angular/core';
import {TipoDocumento} from "../../../../shared/models/TipoDocumento";
import {Cliente} from "../../../../shared/models/Cliente";
import {TablaAdminClienteService} from "../../../../shared/services/admin/tabla_cliente/tabla-admin-cliente.service";
import {
  TablaAdminTipoDocumentoService
} from "../../../../shared/services/admin/tabla_tipoDocumento/tabla-admin-tipo-documento.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserI} from "../../../../shared/models/user.interface";
import {Cuadrilla} from "../../../../shared/models/Cuadrilla";
import {Rol} from "../../../../shared/models/Rol";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";
import {RolService} from "../../../../shared/services/rol.service";
import {TablaAdminUsuarioService} from "../../../../shared/services/admin/tabla_usuario/tabla-admin-usuario.service";

@Component({
  selector: 'app-usuario-admin-editar',
  templateUrl: './usuario-admin-editar.component.html',
  styleUrls: ['./usuario-admin-editar.component.scss']
})
export class UsuarioAdminEditarComponent implements OnInit {

  loading: any;
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo actualizar el usuario";
  tipoDocumento: TipoDocumento[] = [];
  cuadrilla: Cuadrilla[] = [];
  rol: Rol[] = [];
  @Input() usuario : UserI;

  constructor(private  usuariocv: TablaAdminUsuarioService,
              private  tipoDocumentocv: TablaAdminTipoDocumentoService,
              private  cuadrillacv: CuadrillaAdminService,
              private  rolcv: RolService,
              private router:Router,public dialog: MatDialog) {
  }
  public editUsuario = new FormGroup({
    login: new FormControl('', [Validators.required,Validators.email]),
    clave: new FormControl('', Validators.required),
    tipoDoc: new FormControl('', Validators.required),
    identificacion: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    idCuadrilla: new FormControl('', Validators.required),
    idRol: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initValuesForm();
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
  confirmar(resultant:UserI){
    this.loading=false;
    if(resultant){
      alert("Usuario actualizado");
      this.dialog.closeAll();
      this.usuario=null;
      location.href = "/admin/usuario_admin";
    }else{
      alert("No se pudo actualizar el usuario");
    }
  }
  editar_usuario(usuario: UserI){

    usuario.idUsuario= this.usuario.idUsuario;
    usuario.estado= this.usuario.estado;
    usuario.fecha_ultima_contra = this.usuario.fecha_ultima_contra;
    this.loading=true;

    if ( this.editUsuario.valid) {
      this.usuariocv.editarUsuario(usuario).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo actualizar el usuario");
      this.loading=false;
    }
  }
  private initValuesForm(): void {
    this.editUsuario.patchValue({
      idUsuario: this.usuario.idUsuario,
      login: this.usuario.login,
      tipoDoc: this.usuario.tipoDoc,
      identificacion: this.usuario.identificacion,
      direccion: this.usuario.direccion,
      nomRol: this.usuario.nomRol,
      fecha_ultima_contra: this.usuario.fecha_ultima_contra,
    });
  }

}
