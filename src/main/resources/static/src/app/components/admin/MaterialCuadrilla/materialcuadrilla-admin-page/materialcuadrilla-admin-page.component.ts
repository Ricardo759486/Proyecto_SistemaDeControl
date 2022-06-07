import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materialcuadrilla-admin-page',
  templateUrl: './materialcuadrilla-admin-page.component.html',
  styleUrls: ['./materialcuadrilla-admin-page.component.scss']
})
export class MaterialcuadrillaAdminPageComponent implements OnInit {
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

