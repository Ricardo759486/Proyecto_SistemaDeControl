import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TablaAdminTelefonoService} from "../../../../shared/services/admin/tabla_telefono/tabla-admin-telefono.service";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Telefono} from "../../../../shared/models/Telefono";

@Component({
  selector: 'app-telefono-admin',
  templateUrl: './telefono-admin-register.component.html',
  styleUrls: ['./telefono-admin-register.component.scss']
})
export class TelefonoAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  telefono: Telefono[] = [];
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el telefono";
  constructor(private  telefonoscv: TablaAdminTelefonoService,
              private router:Router,public dialog: MatDialog) { }

  public newTelefono = new FormGroup({
    numTelefono: new FormControl('', Validators.required),
    tipoUsuario: new FormControl('', Validators.required),
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
  confirmar(resultant:Telefono){
    this.loading=false;
    if(resultant){
      alert("Telefono registrado");
      this.dialog.closeAll();
      this.telefono=[];
      location.href = "/admin/telefono_admin";
    }else{
      alert("No se pudo registrar el telefono");
    }
  }

  register_telefono(telefono: Telefono){ {
    this.loading=true;

    if ( this.newTelefono.valid) {
      this.telefonoscv.registerService(telefono).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo registrar el telefono");
      this.loading=false;
    }
  }


  }
}

