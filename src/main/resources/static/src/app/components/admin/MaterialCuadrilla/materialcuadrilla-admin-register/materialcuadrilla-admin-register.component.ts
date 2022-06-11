import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MaterialCuadrilla} from "../../../../shared/models/MaterialCuadrilla";
import {
  TablaAdminMaterialcuadrillaService
} from "../../../../shared/services/admin/tabla_materialcuadrilla/tabla-admin-materialcuadrilla.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Cuadrilla} from "../../../../shared/models/Cuadrilla";
import {Material} from "../../../../shared/models/Material";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";
import {MaterialAdminService} from "../../../../shared/services/admin/tabla_material/material-admin.service";

@Component({
  selector: 'app-materialcuadrilla-admin',
  templateUrl: './materialcuadrilla-admin-register.component.html',
  styleUrls: ['./materialcuadrilla-admin-register.component.scss']
})
export class MaterialcuadrillaAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  materialcuadrilla: MaterialCuadrilla[] = [];
  cuadrilla: Cuadrilla[] = [];
  material: Material[] = [];
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo asignar el material";
  constructor(private  materialcuadrillascv: TablaAdminMaterialcuadrillaService,
              private  cuadrillacv: CuadrillaAdminService,
              private  materialcv: MaterialAdminService,
              private router:Router,public dialog: MatDialog) { }

  public newMaterialCuadrilla = new FormGroup({
    cuadrilla: new FormControl('', Validators.required),
    material: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
    this.cuadrillacv.getCuadrilla().subscribe(data =>{
      this.cuadrilla = data;
    });
    this.materialcv.getMaterial().subscribe(data =>{
      this.material = data;
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  confirmar(resultant:MaterialCuadrilla){
    this.loading=false;
    if(resultant){
      alert("Material asignado a la cuadrilla");
      this.dialog.closeAll();
      this.materialcuadrilla=[];
    }else{
      alert("No se pudo asignar el material a la cuadrilla");
    }
  }

  register_materialCuadrilla(materialcuadrilla: MaterialCuadrilla){ {
    this.loading=true;

    if ( this.newMaterialCuadrilla.valid) {
      this.materialcuadrillascv.registerService(materialcuadrilla).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo asignar el material a la cuadrilla");
      this.loading=false;
    }
  }


  }
}
