import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auditoria-admin-page',
  templateUrl: './auditoria-admin-page.component.html',
  styleUrls: ['./auditoria-admin-page.component.scss']
})
export class AuditoriaAdminPageComponent implements OnInit {
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
