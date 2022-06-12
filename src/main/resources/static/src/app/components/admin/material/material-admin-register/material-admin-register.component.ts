import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Material} from "../../../../shared/models/Material";
import {MaterialAdminService} from "../../../../shared/services/admin/tabla_material/material-admin.service";

@Component({
  selector: 'app-material-admin',
  templateUrl: './material-admin-register.component.html',
  styleUrls: ['./material-admin-register.component.scss']
})
export class MaterialAdminRegisterComponent implements OnInit {

  user: any = {};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  material: Material[] = [];
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el material";
  constructor(private  materialscv: MaterialAdminService,
              private router:Router,public dialog: MatDialog) { }

  public newMaterial = new FormGroup({
    nombre: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required),
    costo: new FormControl('', Validators.required),
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
  confirmar(resultant:Material){
    this.loading=false;
    if(resultant){
      alert("Material registrado");
      this.dialog.closeAll();
      this.material=[];
    }else{
      alert("No se pudo registrar el material");
    }
  }

  register_material(material: Material){ {
    this.loading=true;

    if ( this.newMaterial.valid) {
      this.materialscv.registerService(material).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo registrar el material");
      this.loading=false;
    }
  }


  }
}
