import {Component, Input, OnInit} from '@angular/core';
import {Proveedor} from "../../../../shared/models/Proveedor";
import {
  TablaAdminProveedorService
} from "../../../../shared/services/admin/tabla_proveedor/tabla-admin-proveedor.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TurnoTrabajo} from "../../../../shared/models/TurnoTrabajo";
import {
  TablaAdminTurnotrabajoService
} from "../../../../shared/services/admin/tabla_turnotrabajo/tabla-admin-turnotrabajo.service";

@Component({
  selector: 'app-turnotrabajo-admin-editar',
  templateUrl: './turnotrabajo-admin-editar.component.html',
  styleUrls: ['./turnotrabajo-admin-editar.component.scss']
})
export class TurnotrabajoAdminEditarComponent implements OnInit {

  loading: any;
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo actualizar el proveedor";
  @Input() turnotrabajo : TurnoTrabajo;

  constructor(private  turnotrabajoscv: TablaAdminTurnotrabajoService, private router:Router,public dialog: MatDialog) {
  }
  public editTurnoTrabajo = new FormGroup({
    descripcion: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initValuesForm();
  }
  confirmar(resultant:TurnoTrabajo){
    this.loading=false;
    if(resultant){
      alert("Turno de Trabajo actualizado");
      this.dialog.closeAll();
      location.href = "/admin/turnotrabajo_admin";
    }else{
      alert("No se pudo actualizar el turno de trabajo");
    }
  }
  editar_turnotrabajo(turnotrabajo: TurnoTrabajo){

    turnotrabajo.idTurno = this.turnotrabajo.idTurno;
    turnotrabajo.estado = this.turnotrabajo.estado;
    this.loading=true;

    if ( this.editTurnoTrabajo.valid) {
      this.turnotrabajoscv.editarTurnoTrabajo(turnotrabajo).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo actualizar el turno de trabajo");
      this.loading=false;
    }
  }
  private initValuesForm(): void {
    this.editTurnoTrabajo.patchValue({
      idTurno: this.turnotrabajo.idTurno,
      descripcion: this.turnotrabajo.descripcion,
    });
  }
}
