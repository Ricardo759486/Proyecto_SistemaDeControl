import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zona-admin-page',
  templateUrl: './zona-admin-page.component.html',
  styleUrls: ['./zona-admin-page.component.scss']
})
export class ZonaAdminPageComponent implements OnInit {
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
