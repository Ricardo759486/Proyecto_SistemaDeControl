import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Cuadrilla} from "../../../../shared/models/Cuadrilla";
import {Material} from "../../../../shared/models/Material";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";
import {MaterialAdminService} from "../../../../shared/services/admin/tabla_material/material-admin.service";
import {
  TablaAdminMaterialcuadrillaService
} from "../../../../shared/services/admin/tabla_materialcuadrilla/tabla-admin-materialcuadrilla.service";
import {MaterialCuadrilla} from "../../../../shared/models/MaterialCuadrilla";

@Component({
  selector: 'app-materialcuadrilla-admin-editar',
  templateUrl: './materialcuadrilla-admin-editar.component.html',
  styleUrls: ['./materialcuadrilla-admin-editar.component.scss']
})
export class MaterialcuadrillaAdminEditarComponent implements OnInit {

  loading: any;
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo actualizar la asignacion de material";
  cuadrilla: Cuadrilla[] = [];
  material: Material[] = [];
  @Input() materialCuadrilla : MaterialCuadrilla;

  constructor(private  materialCuadrillacv: TablaAdminMaterialcuadrillaService,
              private  cuadrillacv: CuadrillaAdminService,
              private  materialcv: MaterialAdminService,
              private router:Router,public dialog: MatDialog) {
  }
  public editMaterialCuadrilla = new FormGroup({
    idCuadrilla: new FormControl('', [Validators.required]),
    idMaterial: new FormControl('', Validators.required),
    cantidad: new FormControl('', [Validators.required, Validators.max(100000)]),
  });

  ngOnInit(): void {
    this.initValuesForm();
    this.cuadrillacv.getCuadrilla().subscribe(data =>{
      this.cuadrilla = data;
    });
    this.materialcv.getMaterial().subscribe(data =>{
      this.material = data;
    });
  }
  confirmar(resultant:MaterialCuadrilla){
    this.loading=false;
    if(resultant){
      alert("Asignacion actualizada");
      this.dialog.closeAll();
      location.href = "/admin/materialCuadrilla_admin";
    }else{
      alert("No se pudo aztualizar la asignacion");
    }
  }
  editar_materialCuadrilla(materialCuadrilla: MaterialCuadrilla){

    materialCuadrilla.idRegistro= this.materialCuadrilla.idRegistro;

    this.loading=true;

    if ( this.editMaterialCuadrilla.valid) {
      this.materialCuadrillacv.editarMaterialCuadrilla(materialCuadrilla).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo actualizar la asignacion");
      this.loading=false;
    }
  }
  private initValuesForm(): void {
    this.editMaterialCuadrilla.patchValue({
      idRegistro: this.materialCuadrilla.idRegistro,
      cantidad: this.materialCuadrilla.cantidad,
      cuadrilla: this.materialCuadrilla.cuadrilla,
      material: this.materialCuadrilla.material,
    });
  }

}
