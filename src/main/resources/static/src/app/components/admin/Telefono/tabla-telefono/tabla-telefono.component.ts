import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Telefono} from "../../../../shared/models/Telefono";
import {TablaAdminTelefonoService} from "../../../../shared/services/admin/tabla_telefono/tabla-admin-telefono.service";

@Component({
  selector: 'app-tabla-telefono',
  templateUrl: './tabla-telefono.component.html',
  styleUrls: ['./tabla-telefono.component.scss']
})
export class TablaTelefonoComponent implements OnInit {

  telefono: Telefono[] = [];
  constructor(private tabla_admin_telefonoscv: TablaAdminTelefonoService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_telefonoscv.getTelefonos().subscribe(data =>{
      this.telefono = data;
    });
  }

  Editar(telefono: Telefono) {

  }

  Delete(telefono: Telefono) {
    this.tabla_admin_telefonoscv.deleteTelefono(telefono).subscribe(data => {
      this.telefono = this.telefono.filter(p => p !== telefono);
      alert("Telefono Eliminado");
    })
  }
}
