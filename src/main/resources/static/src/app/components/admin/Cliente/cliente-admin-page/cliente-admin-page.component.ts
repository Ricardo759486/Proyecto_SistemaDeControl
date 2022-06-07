import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-admin-page',
  templateUrl: './cliente-admin-page.component.html',
  styleUrls: ['./cliente-admin-page.component.scss']
})
export class ClienteAdminPageComponent implements OnInit {
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
