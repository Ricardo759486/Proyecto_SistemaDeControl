import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turnotrabajo-register-page',
  templateUrl: './turnotrabajo-register-page.component.html',
  styleUrls: ['./turnotrabajo-register-page.component.scss']
})
export class TurnotrabajoRegisterPageComponent implements OnInit {
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
