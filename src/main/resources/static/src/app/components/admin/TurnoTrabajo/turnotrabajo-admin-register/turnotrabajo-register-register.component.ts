import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {
  TablaAdminTurnotrabajoService
} from "../../../../shared/services/admin/tabla_turnotrabajo/tabla-admin-turnotrabajo.service";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TurnoTrabajo} from "../../../../shared/models/TurnoTrabajo";

@Component({
  selector: 'app-turnotrabajo-register-register',
  templateUrl: './turnotrabajo-register-register.component.html',
  styleUrls: ['./turnotrabajo-register-register.component.scss']
})
export class TurnotrabajoRegisterRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  turnotrabajo: TurnoTrabajo[] = [];
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el turno de trabajo";
  constructor(private  turnotrabajoscv: TablaAdminTurnotrabajoService,
              private router:Router,public dialog: MatDialog) { }

  public newTurnoTrabajo = new FormGroup({
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
  confirmar(resultant:TurnoTrabajo){
    this.loading=false;
    if(resultant){
      alert("Turno de Trabajo registrado");
      this.dialog.closeAll();
      this.turnotrabajo =[];
      location.href = "/admin/turnotrabajo_admin";
    }else{
      alert("No se pudo registrar el turno de trabajo");
    }
  }

  register_turnotrabajo(turnotrabajo: TurnoTrabajo){ {
    this.loading=true;

    if ( this.newTurnoTrabajo.valid) {
      this.turnotrabajoscv.registerService(turnotrabajo).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo registrar el turno de trabajo");
      this.loading=false;
    }
  }
  }
}

