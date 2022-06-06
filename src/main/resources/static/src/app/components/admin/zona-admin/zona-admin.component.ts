import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zona-admin',
  templateUrl: './zona-admin.component.html',
  styleUrls: ['./zona-admin.component.scss']
})
export class ZonaAdminComponent implements OnInit {
  user: any={};
  sideBarOpen: any;
  loading: any;
  Ciudad: any;
  Coordenadas: any;
  Localidad: any;
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
