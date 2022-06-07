import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telefono-admin',
  templateUrl: './telefono-admin.component.html',
  styleUrls: ['./telefono-admin.component.scss']
})
export class TelefonoAdminComponent implements OnInit {

  user: any={};
  sideBarOpen: any;
  loading: any;
  errorInicio: any;
  mensajeError: any;
  num_telefono: any;
  tipo: any;
  idUsuario: any;
  idProveedor: any;
  idCliente: any;

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
