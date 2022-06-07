import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadrilla-admin',
  templateUrl: './cuadrilla-admin-register.component.html',
  styleUrls: ['./cuadrilla-admin-register.component.scss']
})
export class CuadrillaAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  loading: any;
  cuadrilla: any;
  sideBarOpen: any;
  errorInicio: any;
  mensajeError: any;
  Zona: any;


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

  register_cuadrilla() {

  }
}
