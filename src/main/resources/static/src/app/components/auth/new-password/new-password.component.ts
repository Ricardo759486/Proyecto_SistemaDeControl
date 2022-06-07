import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  loading: any;
  user: any={};
  claveRepeat: string =  "";
  errorInicio: any;
  mensajeError: any;

  constructor() { }

  ngOnInit(): void {
  }

  CambiarClave() {
    
  }
}
