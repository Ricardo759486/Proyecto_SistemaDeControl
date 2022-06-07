import { Component, OnInit } from '@angular/core';
import {Proveedor} from "../../../../shared/models/Proveedor";
import {Router} from "@angular/router";
import {UserI} from "../../../../shared/models/user.interface";
import {TablaAdminUsuarioService} from "../../../../shared/services/admin/tabla_usuario/tabla-admin-usuario.service";

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.scss']
})
export class TablaUsuarioComponent implements OnInit {

  usuario: UserI[] = [];
  constructor(private tabla_admin_usuarioscv: TablaAdminUsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_usuarioscv.getUsuario().subscribe(data =>{
      this.usuario = data;
    });
  }

  Editar(usuario: UserI) {
  }
  Delete(usuario: UserI) {
  }
}
