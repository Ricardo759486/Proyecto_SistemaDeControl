import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";

@Component({
  selector: 'app-cuadrilla-admin',
  templateUrl: './cuadrilla-admin-register.component.html',
  styleUrls: ['./cuadrilla-admin-register.component.scss']
})
export class CuadrillaAdminRegisterComponent implements OnInit {

  user: any={};
  loading: any;
  cuadrilla: any={};
  sideBarOpen: any;
  errorInicio: any;
  mensajeError: any;
  Zona: any;


  constructor(private  cuadrillascv: CuadrillaAdminService, private router:Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  register_cuadrilla() {
    let formulary : any = document.getElementById("register_provedor");
    let formularyValid:boolean = formulary.reportValidity();
    if (formularyValid){
      this.loading=true;
      this.cuadrillascv.registerService(this.cuadrilla).subscribe(
        data => {
          this.confirmar(data);
        })
    }
  }


  confirmar(resultant:any){
    this.loading=false;
    if(resultant){
      alert("Cuadrilla registrada");
      this.cuadrilla={};
    }else{
      this.errorInicio=true;
    }
  }
}
