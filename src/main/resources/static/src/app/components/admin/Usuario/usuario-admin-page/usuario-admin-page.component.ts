import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-admin-page',
  templateUrl: './usuario-admin-page.component.html',
  styleUrls: ['./usuario-admin-page.component.scss']
})
export class UsuarioAdminPageComponent implements OnInit {
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
