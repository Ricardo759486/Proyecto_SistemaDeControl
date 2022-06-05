import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-main',
  templateUrl: './admin-dashboard-main.component.html',
  styleUrls: ['./admin-dashboard-main.component.scss']
})
export class AdminDashboardMainComponent implements OnInit {
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
