import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {
  TablaAdminTurnotrabajoService
} from "../../../../shared/services/admin/tabla_turnotrabajo/tabla-admin-turnotrabajo.service";

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
  turnotrabajo: any={};
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el turno de trabajo";

  constructor(private  turnotrabajoscv: TablaAdminTurnotrabajoService, private router:Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  register_turnotrabajo() {

  }
}
