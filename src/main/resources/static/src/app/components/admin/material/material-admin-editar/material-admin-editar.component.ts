import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Material} from "../../../../shared/models/Material";
import {MaterialAdminService} from "../../../../shared/services/admin/tabla_material/material-admin.service";

@Component({
  selector: 'app-material-admin-editar',
  templateUrl: './material-admin-editar.component.html',
  styleUrls: ['./material-admin-editar.component.scss']
})
export class MaterialAdminEditarComponent implements OnInit {

  loading: any;
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo actualizar el material";
  @Input() material: Material;

  constructor(private  materialcv: MaterialAdminService,
              private router:Router,public dialog: MatDialog) {
  }
  public editMaterial = new FormGroup({
    nombreMaterial: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required),
    costo: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initValuesForm();
  }
  confirmar(resultant:Material){
    this.loading=false;
    if(resultant){
      alert("Material actualizado");
      this.dialog.closeAll();
      location.href = "/admin/material_admin";
    }else{
      alert("No se pudo actualizar el material");
    }
  }
  editar_material(material: Material){

    material.idInventario= this.material.idInventario;
    material.estado = this.material.estado;
    this.loading=true;

    if ( this.editMaterial.valid) {
      this.materialcv.editarMaterial(material).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo actualizar el material");
      this.loading=false;
    }
  }
  private initValuesForm(): void {
    this.editMaterial.patchValue({
      idInventario: this.material.idInventario,
      nombreMaterial: this.material.nombreMaterial,
      cantidad: this.material.cantidad,
      costo:this.material.costo
    });
  }

}
