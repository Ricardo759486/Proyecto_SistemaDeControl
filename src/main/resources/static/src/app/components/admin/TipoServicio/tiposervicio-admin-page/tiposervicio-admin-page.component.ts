import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiposervicio-admin-page',
  templateUrl: './tiposervicio-admin-page.component.html',
  styleUrls: ['./tiposervicio-admin-page.component.scss']
})
export class TiposervicioAdminPageComponent implements OnInit {
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
