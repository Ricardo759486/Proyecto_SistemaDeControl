import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  loading: boolean =false;
  user: any={};
  constructor() { }

  ngOnInit(): void {
  }

  register() {
      console.log(this.user);
  }
}
