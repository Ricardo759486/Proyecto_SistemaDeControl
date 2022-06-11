import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Cuadrilla} from "../../../../shared/models/Cuadrilla";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";

@Component({
  selector: 'app-cuadrilla-admin',
  templateUrl: './cuadrilla-admin-register.component.html',
  styleUrls: ['./cuadrilla-admin-register.component.scss']
})
export class CuadrillasAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  loading: any;
  cuadrilla: Cuadrilla[] = [];
  sideBarOpen: any;
  errorInicio: any;
  mensajeError: any;

  constructor(private  cuadrillascv: CuadrillaAdminService, private router:Router,public dialog: MatDialog) { }

  public newCuadrilla = new FormGroup({
    movilasociado: new FormControl('', Validators.required),
    idzona: new FormControl('', Validators.required),
    idproveedor: new FormControl('', Validators.required),
    idturno: new FormControl('', Validators.required),
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

  confirmar(resultant: Cuadrilla){
    this.loading=false;
    if(resultant){
      alert("Cuadrilla registrada");
      this.dialog.closeAll();
      this.cuadrilla=[];
    }else{
      alert("No se pudo registrar la cuadrilla");
    }
  }

  register_cuadrilla(cuadrilla: Cuadrilla){ {
    this.loading=true;

    if ( this.newCuadrilla.valid) {
      this.cuadrillascv.registerService(cuadrilla).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo registrar la cuadrilla");
      this.loading=false;
    }
  }


  }
}
