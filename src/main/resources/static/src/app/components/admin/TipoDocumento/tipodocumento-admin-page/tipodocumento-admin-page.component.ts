import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipodocumento-admin-page',
  templateUrl: './tipodocumento-admin-page.component.html',
  styleUrls: ['./tipodocumento-admin-page.component.scss']
})
export class TipodocumentoAdminPageComponent implements OnInit {
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
