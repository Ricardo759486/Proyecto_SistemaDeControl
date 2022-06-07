import { Component, OnInit } from '@angular/core';
import {RegisterService}  from "../../../shared/services/auth/register.service";
import {Router} from "@angular/router";
import {TipoDocumento} from "../../../shared/models/TipoDocumento";
import {
  TablaAdminTipoDocumentoService
} from "../../../shared/services/admin/tabla_tipoDocumento/tabla-admin-tipo-documento.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  sideBarOpen = true;
  loading: boolean =false;
  user: any={};
  errorRegister: boolean= false;
  mensajeError: any="Revisa los campos";
  cuadrilla: any;
  zona: any;

  tipoDocumento: TipoDocumento[] = [];

  constructor(private registerscv:RegisterService,
              private admin_tipoDocumentoscv: TablaAdminTipoDocumentoService,
              private router:Router) { }

  ngOnInit(): void {
    this.admin_tipoDocumentoscv.getTipoDocumento().subscribe(data =>{
      this.tipoDocumento = data;
    });
    console.log(this.tipoDocumento);
  }

  register() {
    let formulary : any = document.getElementById("register");
    let formularyValid:boolean = formulary.reportValidity();
    if (formularyValid){
      console.log(this.user);
      this.loading=true;
      this.registerscv.registerService(this.user).subscribe(
        data => {
          this.confirmar(data);
        })
    }
  }
  confirmar(resultant:any){
    this.loading=false;
    if(resultant){
      alert("Usuario registrado");
      this.user={};
    }else{
      this.errorRegister=true;
    }
  }
}
