import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordentrabajo-admin-page',
  templateUrl: './ordentrabajo-admin-page.component.html',
  styleUrls: ['./ordentrabajo-admin-page.component.scss']
})
export class OrdentrabajoAdminPageComponent implements OnInit {
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
