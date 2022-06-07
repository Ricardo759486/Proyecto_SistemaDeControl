import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametro-admin',
  templateUrl: './parametro-admin-register.component.html',
  styleUrls: ['./parametro-admin-register.component.scss']
})
export class ParametroAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  parametro: any;
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

  register_parametro() {

  }
}
