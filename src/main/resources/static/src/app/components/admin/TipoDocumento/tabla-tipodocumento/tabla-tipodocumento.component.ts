import { Component, OnInit } from '@angular/core';
import {Proveedor} from "../../../../shared/models/Proveedor";
import {Router} from "@angular/router";
import {TipoDocumento} from "../../../../shared/models/TipoDocumento";
import {
  TablaAdminTipoDocumentoService
} from "../../../../shared/services/admin/tabla_tipoDocumento/tabla-admin-tipo-documento.service";

@Component({
  selector: 'app-tabla-tipodocumento',
  templateUrl: './tabla-tipodocumento.component.html',
  styleUrls: ['./tabla-tipodocumento.component.scss']
})
export class TablaTipodocumentoComponent implements OnInit {

  tipodocumento: TipoDocumento[] = [];
  constructor(private tabla_admin_tipodocumentoscv: TablaAdminTipoDocumentoService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_tipodocumentoscv.getTipoDocumento().subscribe(data =>{
      this.tipodocumento = data;
    });
  }

  Editar(tipodocumento: TipoDocumento) {

  }

  Delete(tipodocumento: TipoDocumento) {
    this.tabla_admin_tipodocumentoscv.deleteTipoDocumento(tipodocumento).subscribe(data => {
      this.tipodocumento = this.tipodocumento.filter(p => p !== tipodocumento);
      alert("Tipo de Documento Eliminado");
    })
  }
}
