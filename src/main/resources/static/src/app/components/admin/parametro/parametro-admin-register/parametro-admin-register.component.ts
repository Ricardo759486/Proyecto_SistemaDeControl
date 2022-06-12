import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Parametro} from "../../../../shared/models/Parametro";
import {
  TablaAdminParametroService
} from "../../../../shared/services/admin/tabla_parametro/tabla-admin-parametro.service";

@Component({
  selector: 'app-parametro-admin',
  templateUrl: './parametro-admin-register.component.html',
  styleUrls: ['./parametro-admin-register.component.scss']
})
export class ParametroAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  parametro: Parametro[] = [];
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el parametro";
  constructor(private  parametroscv: TablaAdminParametroService,
              private router:Router,public dialog: MatDialog) { }

  public newParametro = new FormGroup({
    descripcion: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
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
  confirmar(resultant:Parametro){
    this.loading=false;
    if(resultant){
      alert("Parametro registrado");
      this.dialog.closeAll();
      this.parametro=[];
    }else{
      alert("No se pudo registrar el parametro");
    }
  }

  register_parametro(parametro: Parametro){ {
    this.loading=true;

    if ( this.newParametro.valid) {
      this.parametroscv.registerService(parametro).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo registrar el parametro");
      this.loading=false;
    }
  }


  }
}

