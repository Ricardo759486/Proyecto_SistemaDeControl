import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Zona} from "../../../../shared/models/Zona";
import {TablaAdminZonaService} from "../../../../shared/services/admin/tabla_zona/tabla-admin-zona.service";

@Component({
  selector: 'app-zona-admin-editar',
  templateUrl: './zona-admin-editar.component.html',
  styleUrls: ['./zona-admin-editar.component.scss']
})
export class ZonaAdminEditarComponent implements OnInit {

  loading: any;
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo actualizar la zona";
  @Input() zona : Zona;

  constructor(private  zonascv: TablaAdminZonaService, private router:Router,public dialog: MatDialog) {
  }
  public editZona = new FormGroup({
    ciudad: new FormControl('', Validators.required),
    coordenadas: new FormControl('', Validators.required),
    localidad: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initValuesForm();
  }
  confirmar(resultant:Zona){
    this.loading=false;
    if(resultant){
      alert("Zona actualizado");
      this.dialog.closeAll();
      location.href = "/admin/zona_admin";
    }else{
      alert("No se pudo actualizar la Zona");
    }
  }
  editar_zona(zona: Zona){

    zona.idZona = this.zona.idZona;
    zona.estado = this.zona.estado;

    this.loading=true;

    if ( this.editZona.valid) {
      this.zonascv.editarZona(zona).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo actualizar la zona");
      this.loading=false;
    }
  }
  private initValuesForm(): void {
    this.editZona.patchValue({
      idZona: this.zona.idZona,
      ciudad: this.zona.ciudad,
      coordenadas: this.zona.coordenadas,
      localidad: this.zona.localidad,
    });
  }
}
