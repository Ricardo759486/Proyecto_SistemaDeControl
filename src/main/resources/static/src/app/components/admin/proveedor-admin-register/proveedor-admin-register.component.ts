import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedor-admin-register',
  templateUrl: './proveedor-admin-register.component.html',
  styleUrls: ['./proveedor-admin-register.component.scss']
})
export class ProveedorAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  email: any;
  password: any;
  errorInicio: any;
  mensajeError: any;
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
