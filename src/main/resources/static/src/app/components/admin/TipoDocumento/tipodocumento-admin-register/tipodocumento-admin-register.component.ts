import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TipoDocumento} from "../../../../shared/models/TipoDocumento";
import {
  TablaAdminTipoDocumentoService
} from "../../../../shared/services/admin/tabla_tipoDocumento/tabla-admin-tipo-documento.service";

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
  tipodocumento: TipoDocumento[] = [];
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el tipo de documento";
  constructor(private  tipodocumentoscv: TablaAdminTipoDocumentoService,
              private router:Router,public dialog: MatDialog) { }

  public newTipoDocumento = new FormGroup({
    descripcion: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  confirmar(resultant:TipoDocumento){
    this.loading=false;
    if(resultant){
      alert("Tipo de Documento registrado");
      this.dialog.closeAll();
      this.tipodocumento=[];
      location.href = "/admin/tipodocumento_admin";
    }else{
      alert("No se pudo registrar el tipo de documento");
    }
  }

  register_tipodocumento(tipodocumento: TipoDocumento){ {
    this.loading=true;

    if ( this.newTipoDocumento.valid) {
      this.tipodocumentoscv.registerService(tipodocumento).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo registrar el tipo de documento");
      this.loading=false;
    }
  }
  }
}

