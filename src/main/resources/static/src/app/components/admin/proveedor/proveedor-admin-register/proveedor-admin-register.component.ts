import { Component, OnInit } from '@angular/core';
import {
  TablaAdminProveedorService
} from "../../../../shared/services/admin/tabla_proveedor/tabla-admin-proveedor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-proveedor-admin-register',
  templateUrl: './proveedor-admin-register.component.html',
  styleUrls: ['./proveedor-admin-register.component.scss']
})
export class ProveedorAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  proveedor: any={};
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el proveedor";

  constructor(private  provedorscv: TablaAdminProveedorService, private router:Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


  register_proveedor() {
    let formulary : any = document.getElementById("register_provedor");
    let formularyValid:boolean = formulary.reportValidity();
    if (formularyValid){
      this.loading=true;
      this.provedorscv.registerService(this.proveedor).subscribe(
        data => {
          this.confirmar(data);
        })
    }
  }

  confirmar(resultant:any){
    this.loading=false;
    if(resultant){
      alert("Proveedor registrado");
      this.proveedor={};
    }else{
      this.errorInicio=true;
    }
  }
}
