import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user: any={};
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem("user"));
    if(!this.user){
      location.href = "/";
    }
  }
  logout(){
    localStorage.removeItem("user");
    location.href = "/";
  }

}
