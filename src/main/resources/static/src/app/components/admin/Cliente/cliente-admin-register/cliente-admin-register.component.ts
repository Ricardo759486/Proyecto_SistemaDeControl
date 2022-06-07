import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TablaAdminClienteService} from "../../../../shared/services/admin/tabla_cliente/tabla-admin-cliente.service";

@Component({
  selector: 'app-cliente-admin',
  templateUrl: './cliente-admin-register.component.html',
  styleUrls: ['./cliente-admin-register.component.scss']
})
export class ClienteAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  cliente: any={};
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el cliente";

  constructor(private  clientescv: TablaAdminClienteService, private router:Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  register_cliente() {

  }
}
