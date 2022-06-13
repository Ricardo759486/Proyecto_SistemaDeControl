import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TablaAdminClienteService} from "../../../../shared/services/admin/tabla_cliente/tabla-admin-cliente.service";
import {MatDialog} from "@angular/material/dialog";
import {Cliente} from "../../../../shared/models/Cliente";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TipoDocumento} from "../../../../shared/models/TipoDocumento";
import {
  TablaAdminTipoDocumentoService
} from "../../../../shared/services/admin/tabla_tipoDocumento/tabla-admin-tipo-documento.service";

@Component({
  selector: 'app-cliente-admin',
  templateUrl: './cliente-admin-register.component.html',
  styleUrls: ['./cliente-admin-register.component.scss']
})
export class ClienteAdminRegisterComponent implements OnInit {

  user: any={};
  title = 'admin-panel-layout';
  sideBarOpen = true;
  loading: any;
  cliente: Cliente[] = [];
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo registrar el cliente";
  tipoDocumento: TipoDocumento[] = [];

  constructor(private  clientescv: TablaAdminClienteService,
              private  tipoDocumentocv: TablaAdminTipoDocumentoService,
              private router:Router,public dialog: MatDialog) { }

  public newCliente = new FormGroup({
    tipoDoc: new FormControl('', Validators.required),
    numDocumento: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    if(!this.user){
      location.href = "/";
    }
    this.tipoDocumentocv.getTipoDocumento().subscribe(data =>{
      this.tipoDocumento = data;
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  confirmar(resultant:Cliente){
    this.loading=false;
    if(resultant){
      alert("Cliente registrado");
      this.dialog.closeAll();
      this.cliente=[];
    }else{
      alert("No se pudo registrar el cliente");
    }
  }

  register_cliente(cliente: Cliente) {
    {
      cliente.estado = "A";
      this.loading = true;
      console.log(cliente);
      if (this.newCliente.valid) {
        this.clientescv.registerService(cliente).subscribe(
          data => {
            this.confirmar(data);
          })
      } else {
        alert("No se pudo registrar el cliente");
        this.loading = false;
      }
    }
  }
}
