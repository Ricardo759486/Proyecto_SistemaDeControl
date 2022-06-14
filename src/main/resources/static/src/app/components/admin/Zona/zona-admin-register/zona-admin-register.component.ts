import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Zona} from "../../../../shared/models/Zona";
import {TablaAdminZonaService} from "../../../../shared/services/admin/tabla_zona/tabla-admin-zona.service";

@Component({
  selector: 'app-zona-admin',
  templateUrl: './zona-admin-register.component.html',
  styleUrls: ['./zona-admin-register.component.scss']
})
export class ZonaAdminRegisterComponent implements OnInit {

  user: any = {};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  zona: Zona[] = [];
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el zona";
  constructor(private  zonascv: TablaAdminZonaService,
              private router:Router,public dialog: MatDialog) { }

  public newZona = new FormGroup({
    ciudad: new FormControl('', Validators.required),
    coordenadas: new FormControl('', Validators.required),
    localidad: new FormControl('', Validators.required),
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
  confirmar(resultant:Zona){
    this.loading=false;
    if(resultant){
      alert("Zona registrado");
      this.dialog.closeAll();
      this.zona=[];
      location.href = "/admin/zona_admin";
    }else{
      alert("No se pudo registrar la zona");
    }
  }

  register_zona(zona: Zona){ {
    this.loading=true;

    if ( this.newZona.valid) {
      this.zonascv.registerService(zona).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo registrar la zona");
      this.loading=false;
    }
  }
  }
}
