import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telefono-admin-page',
  templateUrl: './telefono-admin-page.component.html',
  styleUrls: ['./telefono-admin-page.component.scss']
})
export class TelefonoAdminPageComponent implements OnInit {
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
