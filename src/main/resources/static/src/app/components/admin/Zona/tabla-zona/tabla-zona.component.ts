import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TablaAdminZonaService} from "../../../../shared/services/admin/tabla_zona/tabla-admin-zona.service";
import {Zona} from "../../../../shared/models/Zona";

@Component({
  selector: 'app-tabla-zona',
  templateUrl: './tabla-zona.component.html',
  styleUrls: ['./tabla-zona.component.scss']
})
export class TablaZonaComponent implements OnInit {

  zona: Zona[] = [];
  constructor(private tabla_admin_zonascv: TablaAdminZonaService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_zonascv.getZonas().subscribe(data =>{
      this.zona = data;
    });
  }

  Editar(zona: Zona) {

  }

  Delete(zona: Zona) {
    this.tabla_admin_zonascv.deleteZona(zona).subscribe(data => {
      this.zona = this.zona.filter(p => p !== zona);
      alert("Zona Eliminada");
    })
  }
}
