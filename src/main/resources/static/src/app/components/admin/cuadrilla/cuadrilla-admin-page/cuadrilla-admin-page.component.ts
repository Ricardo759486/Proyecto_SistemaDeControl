import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadrilla-admin-page',
  templateUrl: './cuadrilla-admin-page.component.html',
  styleUrls: ['./cuadrilla-admin-page.component.scss']
})
export class CuadrillaAdminPageComponent implements OnInit {
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
