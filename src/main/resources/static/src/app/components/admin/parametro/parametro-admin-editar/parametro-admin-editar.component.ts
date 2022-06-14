import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Parametro} from "../../../../shared/models/Parametro";
import {
  TablaAdminParametroService
} from "../../../../shared/services/admin/tabla_parametro/tabla-admin-parametro.service";

@Component({
  selector: 'app-parametro-admin-editar',
  templateUrl: './parametro-admin-editar.component.html',
  styleUrls: ['./parametro-admin-editar.component.scss']
})
export class ParametroAdminEditarComponent implements OnInit {

  loading: any;
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo actualizar el proveedor";
  @Input() parametro : Parametro;

  constructor(private  parametroscv: TablaAdminParametroService, private router:Router,public dialog: MatDialog) {
  }
  public editParametro = new FormGroup({
    descripcion: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initValuesForm();
  }
  confirmar(resultant:Parametro){
    this.loading=false;
    if(resultant){
      alert("Parametro actualizado");
      this.dialog.closeAll();
      location.href = "/admin/parametro_admin";
    }else{
      alert("No se pudo actualizar el parametro");
    }
  }
  editar_parametro(parametro: Parametro) {

    parametro.idParametro = this.parametro.idParametro;
    parametro.estado = this.parametro.estado;

    this.loading=true;

    if ( this.editParametro.valid) {
      this.parametroscv.editarParametro(parametro).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo actualizar el parametro");
      this.loading=false;
    }
  }
  private initValuesForm(): void {
    this.editParametro.patchValue({
      idParametro: this.parametro.idParametro,
      descripcion: this.parametro.descripcion,
      tipo: this.parametro.tipo,
      valor: this.parametro.valor
    });
  }
}

