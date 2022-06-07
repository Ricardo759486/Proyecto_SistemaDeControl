import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-admin-page',
  templateUrl: './material-admin-page.component.html',
  styleUrls: ['./material-admin-page.component.scss']
})
export class MaterialAdminPageComponent implements OnInit {
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
