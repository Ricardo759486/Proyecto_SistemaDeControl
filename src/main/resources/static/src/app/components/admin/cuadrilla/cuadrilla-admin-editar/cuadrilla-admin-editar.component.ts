import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Zona} from "../../../../shared/models/Zona";
import {Proveedor} from "../../../../shared/models/Proveedor";
import {TurnoTrabajo} from "../../../../shared/models/TurnoTrabajo";
import {TablaAdminZonaService} from "../../../../shared/services/admin/tabla_zona/tabla-admin-zona.service";
import {
  TablaAdminProveedorService
} from "../../../../shared/services/admin/tabla_proveedor/tabla-admin-proveedor.service";
import {
  TablaAdminTurnotrabajoService
} from "../../../../shared/services/admin/tabla_turnotrabajo/tabla-admin-turnotrabajo.service";
import {Cuadrilla} from "../../../../shared/models/Cuadrilla";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";

@Component({
  selector: 'app-cuadrilla-admin-editar',
  templateUrl: './cuadrilla-admin-editar.component.html',
  styleUrls: ['./cuadrilla-admin-editar.component.scss']
})
export class CuadrillaAdminEditarComponent implements OnInit {

  loading: any;
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo actualizar la cuadrilla";
  zona: Zona[] = [];
  proveedor: Proveedor[] = [];
  turnoTrabajo: TurnoTrabajo[] = [];
  @Input() cuadrilla : Cuadrilla;

  constructor(private  cuadrillacv: CuadrillaAdminService,
              private  zonacv: TablaAdminZonaService,
              private  proveedorcv: TablaAdminProveedorService,
              private  turnoTrabajocv: TablaAdminTurnotrabajoService,
              private router:Router,public dialog: MatDialog) {
  }
  public editCuadrilla = new FormGroup({
    movilAsociado: new FormControl('', Validators.required),
    idZona: new FormControl('', Validators.required),
    idProveedor: new FormControl('', Validators.required),
    idTurnoTrabajo: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initValuesForm();
    this.zonacv.getZonas().subscribe(data =>{
      this.zona = data;
    });
    this.proveedorcv.getProveedores().subscribe(data =>{
      this.proveedor = data;
    });
    this.turnoTrabajocv.getTurnoTrabajo().subscribe(data =>{
      this.turnoTrabajo = data;
    });
  }
  confirmar(resultant:Cuadrilla){
    this.loading=false;
    if(resultant){
      alert("Cuadrilla actualizada");
      this.dialog.closeAll();
      location.href = "/admin/cuadrilla_admin";
    }else{
      alert("No se pudo aztualizar la cuadrilla");
    }
  }
  editar_cuadrilla(cuadrilla: Cuadrilla){

    cuadrilla.idCuadrilla= this.cuadrilla.idCuadrilla;
    cuadrilla.estado= this.cuadrilla.estado;
    this.loading=true;
  if (cuadrilla.movilAsociado.length<7){


    if ( this.editCuadrilla.valid) {
      this.cuadrillacv.editarCuadrilla(cuadrilla).subscribe(
        data => {
          this.confirmar(data);
        })

    }else {
      alert("No se pudo actualizar la cuadrilla");
      this.loading=false;
    }
  }else{
    alert("El movil asociado debe tener 6 digitos");
    this.loading=false;
  }
  }
  private initValuesForm(): void {
    this.editCuadrilla.patchValue({
      idCuadrilla: this.cuadrilla.idCuadrilla,
      movilAsociado: this.cuadrilla.movilAsociado,
      zona: this.cuadrilla.zona,
      proveedor: this.cuadrilla.proveedor,
      turnoTrabajo: this.cuadrilla.turnoTrabajo,
    });
  }

}
