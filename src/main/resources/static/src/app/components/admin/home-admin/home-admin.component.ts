import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  data: any;
  email: string = "";
  tiempo_contra :string ="";
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')??'{}');
    this.tiempo_contra = this.user.fecha_ultima_contra;
    this.email = this.user.login;
    if(!this.user){
      location.href = "/";
    }

  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
