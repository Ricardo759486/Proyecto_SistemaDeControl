import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametro-admin-page',
  templateUrl: './parametro-admin-page.component.html',
  styleUrls: ['./parametro-admin-page.component.scss']
})
export class ParametroAdminPageComponent implements OnInit {
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
