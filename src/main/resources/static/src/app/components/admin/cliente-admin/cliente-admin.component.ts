import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-admin',
  templateUrl: './cliente-admin.component.html',
  styleUrls: ['./cliente-admin.component.scss']
})
export class ClienteAdminComponent implements OnInit {
  user: any={};
  sideBarOpen: any;
  loading: any;
  numDocumento: any;
  tipoDocumento: any;
  direccion: any;
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
