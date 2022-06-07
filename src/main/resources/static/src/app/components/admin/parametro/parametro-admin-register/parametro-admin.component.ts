import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametro-admin',
  templateUrl: './parametro-admin.component.html',
  styleUrls: ['./parametro-admin.component.scss']
})
export class ParametroAdminComponent implements OnInit {
  user: any={};
  sideBarOpen: any;
  loading: any;
  errorInicio: any;
  mensajeError: any;
  descripcion: any;
  tipo: any;
  valor: any;

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
