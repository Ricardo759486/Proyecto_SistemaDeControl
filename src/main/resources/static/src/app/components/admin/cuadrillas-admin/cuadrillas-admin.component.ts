import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadrillas-admin',
  templateUrl: './cuadrillas-admin.component.html',
  styleUrls: ['./cuadrillas-admin.component.scss']
})
export class CuadrillasAdminComponent implements OnInit {
  loading: any;
  sideBarOpen: any;
  errorInicio: any;
  mensajeError: any;
  MovilAsociado: any;
  Zona: any;
  Proveedor: any;
  TurnoTrabajo: any;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler() {

  }

  login() {

  }
}
