import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordentrabajo-admin',
  templateUrl: './ordentrabajo-admin.component.html',
  styleUrls: ['./ordentrabajo-admin.component.scss']
})
export class OrdentrabajoAdminComponent implements OnInit {

  user: any={};
  sideBarOpen: any;
  loading: any;
  errorInicio: any;
  mensajeError: any;
  idCliente: any;
  descripcion: any;
  idCuadrilla: any;
  idTipoServicio: any;

  constructor() { }
  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  login() {

  }
}
