import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TipoDocumento} from "../../../../shared/models/TipoDocumento";
import {
  TablaAdminTipoDocumentoService
} from "../../../../shared/services/admin/tabla_tipoDocumento/tabla-admin-tipo-documento.service";

@Component({
  selector: 'app-tipodocumento-admin-editar',
  templateUrl: './tipodocumento-admin-editar.component.html',
  styleUrls: ['./tipodocumento-admin-editar.component.scss']
})
export class TipodocumentoAdminEditarComponent implements OnInit {

  loading: any;
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo actualizar el tipo de documento";
  @Input() tipodocumento : TipoDocumento;

  constructor(private  tipodocumentoscv: TablaAdminTipoDocumentoService, private router:Router,public dialog: MatDialog) {
  }
  public editTipodocumento = new FormGroup({
    descripcion: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initValuesForm();
  }
  confirmar(resultant:TipoDocumento){
    this.loading=false;
    if(resultant){
      alert("Tipo de documento actualizado");
      this.dialog.closeAll();
      location.href = "/admin/tipodocumento_admin";
    }else{
      alert("No se pudo actualizar el Tipo de Documento");
    }
  }
  editar_tipodocumento(tipodocumento: TipoDocumento){

    tipodocumento.idDocumento = this.tipodocumento.idDocumento;
    tipodocumento.estado = this. tipodocumento.estado;
    this.loading=true;

    if ( this.editTipodocumento.valid) {
      this.tipodocumentoscv.editarTipoDocumento(tipodocumento).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo actualizar el tipo de documento");
      this.loading=false;
    }
  }
  private initValuesForm(): void {
    this.editTipodocumento.patchValue({
      idDocumento: this.tipodocumento.idDocumento,
      descripcion: this.tipodocumento.descripcion
    });
  }
}

