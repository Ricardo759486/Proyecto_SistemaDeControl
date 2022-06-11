import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrdenTrabajo} from "../../../../shared/models/OrdenTrabajo";
import {
  TablaAdminOrdentrabajoService
} from "../../../../shared/services/admin/tabla_ordentrabajo/tabla-admin-ordentrabajo.service";

@Component({
  selector: 'app-ordentrabajo-admin',
  templateUrl: './ordentrabajo-admin-register.component.html',
  styleUrls: ['./ordentrabajo-admin-register.component.scss']
})
export class OrdentrabajoAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  ordentrabajo: OrdenTrabajo[] = [];
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar la orden de trabajo";
  constructor(private  ordentrabajoscv: TablaAdminOrdentrabajoService,
              private router:Router,public dialog: MatDialog) { }

  public newOrdenTrabajo = new FormGroup({
    descripcion: new FormControl('', Validators.required),
    idCliente: new FormControl('', Validators.required),
    idCuadrilla: new FormControl('', Validators.required),
    idTipoServicio: new FormControl('', Validators.required),
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
  confirmar(resultant:OrdenTrabajo){
    this.loading=false;
    if(resultant){
      alert("Orden de Trabajo registrada");
      this.dialog.closeAll();
      this.ordentrabajo=[];
    }else{
      alert("No se pudo registrar el proveedor");
    }
  }

  register_ordentrabajo(ordentrabajo: OrdenTrabajo){ {
    this.loading=true;

    if ( this.newOrdenTrabajo.valid) {
      this.ordentrabajoscv.registerService(ordentrabajo).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo registrar la orden de trabajo");
      this.loading=false;
    }
  }


  }
}
