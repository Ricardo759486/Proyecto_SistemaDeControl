import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Cuadrilla} from "../../../../shared/models/Cuadrilla";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";
import {Zona} from "../../../../shared/models/Zona";
import {Proveedor} from "../../../../shared/models/Proveedor";
import {TurnoTrabajo} from "../../../../shared/models/TurnoTrabajo";
import {TablaAdminZonaService} from "../../../../shared/services/admin/tabla_zona/tabla-admin-zona.service";
import {
  TablaAdminProveedorService
} from "../../../../shared/services/admin/tabla_proveedor/tabla-admin-proveedor.service";
import {
  TablaAdminTurnotrabajoService
} from "../../../../shared/services/admin/tabla_turnotrabajo/tabla-admin-turnotrabajo.service";

@Component({
  selector: 'app-cuadrilla-admin',
  templateUrl: './cuadrilla-admin-register.component.html',
  styleUrls: ['./cuadrilla-admin-register.component.scss']
})
export class CuadrillasAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  loading: any;
  cuadrilla: Cuadrilla[] = [];
  zona: Zona[] = [];
  proveedor: Proveedor[] = [];
  turnoTrabajo: TurnoTrabajo[] = [];
  sideBarOpen: any;
  errorInicio: any;
  mensajeError: any;

  constructor(private  cuadrillascv: CuadrillaAdminService,
              private  zonacv: TablaAdminZonaService,
              private  proveedorcv: TablaAdminProveedorService,
              private  turnoTrabajocv: TablaAdminTurnotrabajoService,
              private router:Router,public dialog: MatDialog) { }

  public newCuadrilla = new FormGroup({
    movilAsociado: new FormControl('', Validators.required),
    idZona: new FormControl('', Validators.required),
    idProveedor: new FormControl('', Validators.required),
    idTurnoTrabajo: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
    this.zonacv.getZonas().subscribe(data =>{
      this.zona = data;
    });
    this.proveedorcv.getProveedores().subscribe(data =>{
      this.proveedor = data;
    });
    this.turnoTrabajocv.getTurnoTrabajo().subscribe(data =>{
      this.turnoTrabajo = data;
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  confirmar(resultant: Cuadrilla){
    this.loading=false;
    if(resultant){
      alert("Cuadrilla registrada");
      this.dialog.closeAll();
      this.cuadrilla=[];
      location.href = "/admin/cuadrilla_admin";
    }else{
      alert("No se pudo registrar la cuadrilla");
    }
  }

  register_cuadrilla(cuadrilla: Cuadrilla){ {
    this.loading=true;
  if(cuadrilla.movilAsociado.length<7){
    if ( this.newCuadrilla.valid){
      this.cuadrillascv.registerService(cuadrilla).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo registrar la cuadrilla");
      this.loading=false;
    }
  }else{
    alert("El movil asociado debe tener 6 digitos");
    this.loading=false;
  }

  }


  }
}
