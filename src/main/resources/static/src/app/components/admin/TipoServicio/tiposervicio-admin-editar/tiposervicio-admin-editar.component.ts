import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TipoServicio} from "../../../../shared/models/TipoServicio";
import {
  TablaAdminTiposervicioService
} from "../../../../shared/services/admin/tabla_tiposervicio/tabla-admin-tiposervicio.service";

@Component({
  selector: 'app-tiposervicio-admin-editar',
  templateUrl: './tiposervicio-admin-editar.component.html',
  styleUrls: ['./tiposervicio-admin-editar.component.scss']
})
export class TiposervicioAdminEditarComponent implements OnInit {

  loading: any;
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo actualizar el proveedor";
  @Input() tiposervicio : TipoServicio;

  constructor(private  tiposervicioscv: TablaAdminTiposervicioService, private router:Router,public dialog: MatDialog) {
  }
  public editTiposervicio = new FormGroup({
    descripcion: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initValuesForm();
  }
  confirmar(resultant:TipoServicio){
    this.loading=false;
    if(resultant){
      alert("Tipo de Servicio actualizado");
      this.dialog.closeAll();
      location.href = "/admin/tiposervicio_admin";
    }else{
      alert("No se pudo actualizar el Tipo de Servicio");
    }
  }
  editar_tiposervicio(tiposervicio: TipoServicio){

    tiposervicio.idServicio = this.tiposervicio.idServicio;
    tiposervicio.estado = this.tiposervicio.estado;

    this.loading=true;

    if ( this.editTiposervicio.valid) {
      this.tiposervicioscv.editarProveedor(tiposervicio).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo actualizar el Tipo de Servicio");
      this.loading=false;
    }
  }
  private initValuesForm(): void {
    this.editTiposervicio.patchValue({
      idServicio: this.tiposervicio.idServicio,
      descripcion: this.tiposervicio.descripcion
    });
  }
}
