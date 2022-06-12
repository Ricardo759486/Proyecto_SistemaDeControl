import { Component, OnInit } from '@angular/core';
import {
  TablaAdminProveedorService
} from "../../../../shared/services/admin/tabla_proveedor/tabla-admin-proveedor.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Proveedor} from "../../../../shared/models/Proveedor";
import {MatDialog} from "@angular/material/dialog";

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
  proveedor: Proveedor[] = [];
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el proveedor";
  constructor(private  provedorscv: TablaAdminProveedorService,
              private router:Router,public dialog: MatDialog) { }

  public newProveedor = new FormGroup({
    nit: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    nombre: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  confirmar(resultant:Proveedor){
    this.loading=false;
    if(resultant){
      alert("Proveedor registrado");
      this.dialog.closeAll();
      this.proveedor=[];
    }else{
      alert("No se pudo registrar el proveedor");
    }
  }

  register_proveedor(proveedor: Proveedor){ {
    this.loading=true;

    if ( this.newProveedor.valid) {
      this.provedorscv.registerService(proveedor).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo registrar el proveedor");
      this.loading=false;
    }
  }
}
}
