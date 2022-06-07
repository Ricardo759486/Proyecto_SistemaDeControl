import { Component, OnInit } from '@angular/core';
import {Proveedor} from "../../../../shared/models/Proveedor";
import {Zona} from "../../../../shared/models/Zona";
import {TurnoTrabajo} from "../../../../shared/models/TurnoTrabajo";
import {Router} from "@angular/router";
import {TablaAdminZonaService} from "../../../../shared/services/admin/tabla_zona/tabla-admin-zona.service";
import {
  TablaAdminProveedorService
} from "../../../../shared/services/admin/tabla_proveedor/tabla-admin-proveedor.service";
import {
  TablaAdminTurnotrabajoService
} from "../../../../shared/services/admin/tabla_turnotrabajo/tabla-admin-turnotrabajo.service";

import {Router} from "@angular/router";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";

@Component({
  selector: 'app-cuadrilla-admin',
  templateUrl: './cuadrilla-admin-register.component.html',
  styleUrls: ['./cuadrilla-admin-register.component.scss']
})
export class CuadrillaAdminRegisterComponent implements OnInit {

  user: any={};
  loading: any;
  cuadrilla: any={};
  sideBarOpen: any;
  errorInicio: any;
  mensajeError: any;

  zona: Zona[] = [];
  proveedor: Proveedor[] = [];
  turnoTrabajo: TurnoTrabajo[] = [];

<<<<<<< HEAD
  constructor(private admin_zonascv: TablaAdminZonaService,
              private admin_proveedorscv: TablaAdminProveedorService,
              private admin_turnoTrabajoscv: TablaAdminTurnotrabajoService,
              private router:Router) { }
=======
  constructor(private  cuadrillascv: CuadrillaAdminService, private router:Router) { }
>>>>>>> 3c626a14e500e8877cbb9ddeb2a1c5a119a04c3b

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
    this.admin_zonascv.getZona().subscribe(data =>{
      this.zona = data;
    });
    this.admin_proveedorscv.getProveedores().subscribe(data =>{
      this.proveedor = data;
    });
    this.admin_turnoTrabajoscv.getTurnoTrabajo().subscribe(data =>{
      this.turnoTrabajo = data;
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  register_cuadrilla() {
    let formulary : any = document.getElementById("register_provedor");
    let formularyValid:boolean = formulary.reportValidity();
    if (formularyValid){
      this.loading=true;
      this.cuadrillascv.registerService(this.cuadrilla).subscribe(
        data => {
          this.confirmar(data);
        })
    }
  }


  confirmar(resultant:any){
    this.loading=false;
    if(resultant){
      alert("Cuadrilla registrada");
      this.cuadrilla={};
    }else{
      this.errorInicio=true;
    }
  }
}
