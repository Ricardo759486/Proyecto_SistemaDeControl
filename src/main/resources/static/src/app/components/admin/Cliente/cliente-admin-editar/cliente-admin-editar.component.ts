import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Cliente} from "../../../../shared/models/Cliente";
import {TablaAdminClienteService} from "../../../../shared/services/admin/tabla_cliente/tabla-admin-cliente.service";
import {TipoDocumento} from "../../../../shared/models/TipoDocumento";
import {
  TablaAdminTipoDocumentoService
} from "../../../../shared/services/admin/tabla_tipoDocumento/tabla-admin-tipo-documento.service";

@Component({
  selector: 'app-cliente-admin-editar',
  templateUrl: './cliente-admin-editar.component.html',
  styleUrls: ['./cliente-admin-editar.component.scss']
})
export class ClienteAdminEditarComponent implements OnInit {

  loading: any;
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo actualizar el cliente";
  tipoDocumento: TipoDocumento[] = [];
  @Input() cliente : Cliente;

  constructor(private  clientescv: TablaAdminClienteService,
              private  tipoDocumentocv: TablaAdminTipoDocumentoService,
              private router:Router,public dialog: MatDialog) {
  }
  public editCliente = new FormGroup({
    tipoDocumento: new FormControl('', Validators.required),
    numeroDocumento: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initValuesForm();
    this.tipoDocumentocv.getTipoDocumento().subscribe(data =>{
      this.tipoDocumento = data;
    });
  }
  confirmar(resultant:Cliente){
    this.loading=false;
    if(resultant){
      alert("Cliente actualizado");
      this.dialog.closeAll();
      location.href = "/admin/cliente_admin";
    }else{
      alert("No se pudo aztualizar el cliente");
    }
  }
  editar_cliente(cliente: Cliente){

    cliente.idCliente= this.cliente.idCliente;
    cliente.estado= this.cliente.estado;
    this.loading=true;

    if ( this.editCliente.valid) {
      console.log(cliente);
      this.clientescv.editarCliente(cliente).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo actualizar el cliente");
      this.loading=false;
    }
  }
  private initValuesForm(): void {
    this.editCliente.patchValue({
      idCliente: this.cliente.idCliente,
      tipoDocumento: this.cliente.tipoDocumento,
      numeroDocumento: this.cliente.numDocumento,
      direccion: this.cliente.direccion,
    });
  }

}
