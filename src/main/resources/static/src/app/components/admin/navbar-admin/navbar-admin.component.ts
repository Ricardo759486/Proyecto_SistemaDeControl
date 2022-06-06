import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  user: any={};
  email: any;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')??'{}');
    this.email = this.user.login;
    if(!this.user){
      location.href = "/";
    }
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout(){
    localStorage.removeItem("user");
    location.href = "/";
  }
}
