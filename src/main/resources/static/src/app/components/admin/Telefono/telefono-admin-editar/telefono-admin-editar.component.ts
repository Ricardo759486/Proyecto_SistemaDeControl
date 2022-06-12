import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Telefono} from "../../../../shared/models/Telefono";
import {TablaAdminTelefonoService} from "../../../../shared/services/admin/tabla_telefono/tabla-admin-telefono.service";

@Component({
  selector: 'app-telefono-admin-editar',
  templateUrl: './telefono-admin-editar.component.html',
  styleUrls: ['./telefono-admin-editar.component.scss']
})
export class TelefonoAdminEditarComponent implements OnInit {

  loading: any;
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo actualizar el telefono";
  @Input() telefono : Telefono;

  constructor(private  telefonocv: TablaAdminTelefonoService,
              private router:Router,public dialog: MatDialog) {
  }
  public editTelefono = new FormGroup({
    numTelefono: new FormControl('', Validators.required),
    tipoUsuario: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initValuesForm();
  }
  confirmar(resultant:Telefono){
    this.loading=false;
    if(resultant){
      alert("Telefono actualizado");
      this.dialog.closeAll();
      location.href = "/admin/telefono_admin";
    }else{
      alert("No se pudo actualizar el telefono");
    }
  }
  editar_telefono(telefono: Telefono){

    telefono.idTelefono= this.telefono.idTelefono;
    //telefono.estado= this.telefono.estado;
    this.loading=true;

    if ( this.editTelefono.valid) {
      this.telefonocv.editarTelefono(telefono).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo actualizar el telefono");
      this.loading=false;
    }
  }
  private initValuesForm(): void {
    this.editTelefono.patchValue({
      idTelefono: this.telefono.idTelefono,
      numTelefono: this.telefono.numTelefono,
      tipoUsuario: this.telefono.tipo,
    });
  }

}
