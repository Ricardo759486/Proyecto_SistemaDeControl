import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TablaAdminClienteService} from "../../../../shared/services/admin/tabla_cliente/tabla-admin-cliente.service";
import {Cliente} from "../../../../shared/models/Cliente";

@Component({
  selector: 'app-tabla-cliente',
  templateUrl: './tabla-cliente.component.html',
  styleUrls: ['./tabla-cliente.component.scss']
})
export class TablaClienteComponent implements OnInit {

  cliente: Cliente[] = [];
  constructor(private tabla_admin_clientescv: TablaAdminClienteService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_clientescv.getClientes().subscribe(data =>{
      this.cliente = data;
    });
  }

  Editar(cliente: Cliente) {

  }

  Delete(cliente: Cliente) {
    this.tabla_admin_clientescv.deleteCliente(cliente).subscribe(data => {
      this.cliente = this.cliente.filter(p => p !== cliente);
      alert("Proveedor Eliminado");
    })
  }
}
