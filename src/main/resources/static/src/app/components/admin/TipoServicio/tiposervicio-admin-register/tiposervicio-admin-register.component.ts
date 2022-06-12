import { Component, OnInit } from '@angular/core';import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TipoServicio} from "../../../../shared/models/TipoServicio";
import {
  TablaAdminTiposervicioService
} from "../../../../shared/services/admin/tabla_tiposervicio/tabla-admin-tiposervicio.service";

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
  tiposervicio: TipoServicio[] = [];
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el tipo de servicio";
  constructor(private  tiposervicioscv: TablaAdminTiposervicioService,
              private router:Router,public dialog: MatDialog) { }

  public newTiposervicio = new FormGroup({
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
  confirmar(resultant:TipoServicio){
    this.loading=false;
    if(resultant){
      alert("Tipo de servicio registrado");
      this.dialog.closeAll();
      this.tiposervicio=[];
    }else{
      alert("No se pudo registrar el Tipo de servicio");
    }
  }

  register_tiposervicio(tiposervicio: TipoServicio){ {
    this.loading=true;

    if ( this.newTiposervicio.valid) {
      this.tiposervicioscv.registerService(tiposervicio).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo registrar el Tipo de servicio");
      this.loading=false;
    }
  }


  }
}
