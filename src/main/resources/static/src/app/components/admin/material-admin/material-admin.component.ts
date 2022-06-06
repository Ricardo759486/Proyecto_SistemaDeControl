import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-admin',
  templateUrl: './material-admin.component.html',
  styleUrls: ['./material-admin.component.scss']
})
export class MaterialAdminComponent implements OnInit {
  sideBarOpen: any;
  loading: any;
  nombreMaterial: any;
  cantidad: any;
  costo: any;
  errorInicio: any;
  mensajeError: any;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler() {

  }

  login() {

  }
}
