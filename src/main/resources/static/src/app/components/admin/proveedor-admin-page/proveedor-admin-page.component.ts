import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedor-admin-page',
  templateUrl: './proveedor-admin-page.component.html',
  styleUrls: ['./proveedor-admin-page.component.scss']
})
export class ProveedorAdminPageComponent implements OnInit {
  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
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
}
