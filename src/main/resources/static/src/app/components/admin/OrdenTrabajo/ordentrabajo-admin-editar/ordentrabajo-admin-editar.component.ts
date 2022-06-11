import {Component, Input, OnInit} from '@angular/core';
import {TipoDocumento} from "../../../../shared/models/TipoDocumento";
import {Cliente} from "../../../../shared/models/Cliente";
import {TablaAdminClienteService} from "../../../../shared/services/admin/tabla_cliente/tabla-admin-cliente.service";
import {
  TablaAdminTipoDocumentoService
} from "../../../../shared/services/admin/tabla_tipoDocumento/tabla-admin-tipo-documento.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Cuadrilla} from "../../../../shared/models/Cuadrilla";
import {TipoServicio} from "../../../../shared/models/TipoServicio";
import {OrdenTrabajo} from "../../../../shared/models/OrdenTrabajo";
import {
  TablaAdminOrdentrabajoService
} from "../../../../shared/services/admin/tabla_ordentrabajo/tabla-admin-ordentrabajo.service";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";
import {
  TablaAdminTiposervicioService
} from "../../../../shared/services/admin/tabla_tiposervicio/tabla-admin-tiposervicio.service";

@Component({
  selector: 'app-ordentrabajo-admin-editar',
  templateUrl: './ordentrabajo-admin-editar.component.html',
  styleUrls: ['./ordentrabajo-admin-editar.component.scss']
})
export class OrdentrabajoAdminEditarComponent implements OnInit {

  loading: any;
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo actualizar la orden de trabajo";
  cliente: Cliente[] = [];
  cuadrilla: Cuadrilla[] = [];
  tipoServicio: TipoServicio[] = [];
  @Input() ordenTrabajo : OrdenTrabajo;

  constructor(private  ordenTrabajocv: TablaAdminOrdentrabajoService,
              private  clientecv: TablaAdminClienteService,
              private  cuadrillacv: CuadrillaAdminService,
              private  tipoServiciocv: TablaAdminTiposervicioService,
              private router:Router,public dialog: MatDialog) {
  }
  public editOrdenTrabajo = new FormGroup({
    descripcion: new FormControl('', Validators.required),
    cliente: new FormControl('', Validators.required),
    cuadrilla: new FormControl('', Validators.required),
    tipoServicio: new FormControl('', Validators.required),

  });

  ngOnInit(): void {
    this.initValuesForm();
    this.clientecv.getClientes().subscribe(data =>{
      this.cliente = data;
    });
    this.cuadrillacv.getCuadrilla().subscribe(data =>{
      this.cuadrilla = data;
    });
    this.tipoServiciocv.getTipoServicios().subscribe(data =>{
      this.tipoServicio = data;
    });
  }
  confirmar(resultant:OrdenTrabajo){
    this.loading=false;
    if(resultant){
      alert("Orden de trabajo actualizada");
      this.dialog.closeAll();
      location.href = "/admin/ordenTrabajo_admin";
    }else{
      alert("No se pudo aztualizar la orden de trabajo");
    }
  }
  editar_ordenTrabajo(ordenTrabajo: OrdenTrabajo){

    ordenTrabajo.idOrdenTrabajo= this.ordenTrabajo.idOrdenTrabajo;
    ordenTrabajo.estado= this.ordenTrabajo.estado;
    this.loading=true;

    if ( this.editOrdenTrabajo.valid) {
      this.ordenTrabajocv.editarOrdenTrabajo(ordenTrabajo).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo actualizar la orden de trabajo");
      this.loading=false;
    }
  }
  private initValuesForm(): void {
    this.editOrdenTrabajo.patchValue({
      idOrdenTrabajo: this.ordenTrabajo.idOrdenTrabajo,
      descripcion: this.ordenTrabajo.descripcion,
      cliente: this.ordenTrabajo.cliente,
      cuadrilla: this.ordenTrabajo.cuadrilla,
      tipoServicio: this.ordenTrabajo.tipoServicio,
    });
  }

}
