import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-admin',
  templateUrl: './material-admin-register.component.html',
  styleUrls: ['./material-admin-register.component.scss']
})
export class MaterialAdminRegisterComponent implements OnInit {

  user: any = {};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  material: any;
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

  register_material() {

  }
}
