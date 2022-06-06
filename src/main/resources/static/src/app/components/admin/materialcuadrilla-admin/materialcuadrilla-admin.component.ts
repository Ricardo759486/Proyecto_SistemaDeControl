import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materialcuadrilla-admin',
  templateUrl: './materialcuadrilla-admin.component.html',
  styleUrls: ['./materialcuadrilla-admin.component.scss']
})
export class MaterialcuadrillaAdminComponent implements OnInit {
  user: any={};
  Cuadrilla: any;
  Material: any;
  Cantidad: any;
  errorInicio: any;
  mensajeError: any;
  loading: any;
  sideBarOpen: any;

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
