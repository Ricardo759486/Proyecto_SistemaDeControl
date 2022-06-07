import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TablaAdminTelefonoService} from "../../../../shared/services/admin/tabla_telefono/tabla-admin-telefono.service";

@Component({
  selector: 'app-telefono-admin',
  templateUrl: './telefono-admin-register.component.html',
  styleUrls: ['./telefono-admin-register.component.scss']
})
export class TelefonoAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  telefono: any={};
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el telefono";

  constructor(private  telefonoscv: TablaAdminTelefonoService, private router:Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  register_telefono() {

  }
}
