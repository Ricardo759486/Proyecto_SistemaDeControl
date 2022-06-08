import {Component, OnInit, ViewChild} from '@angular/core';
import {Proveedor} from "../../../../shared/models/Proveedor";
import {Router} from "@angular/router";
import {UserI} from "../../../../shared/models/user.interface";
import {TablaAdminUsuarioService} from "../../../../shared/services/admin/tabla_usuario/tabla-admin-usuario.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.scss']
})
export class TablaUsuarioComponent implements OnInit {

  usuario: UserI[] = [];
  displayedColumns: string[] = ['ID', 'login','tipoDoc','identificacion','fechaUltimaContra','rol','movilAsociado','intentos', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  constructor(private tabla_admin_usuarioscv: TablaAdminUsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.tabla_admin_usuarioscv.getUsuario().subscribe(data =>{
      this.usuario = data;
      this.dataSource.data = this.usuario;

    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  Editar(usuario: UserI) {
  }
  Delete(usuario: UserI) {
    this.tabla_admin_usuarioscv.deleteUsuario(usuario).subscribe(data => {
      this.usuario = this.usuario.filter(p => p !== usuario);
      alert("usuario Eliminado");
    })
  }

  Agregar() {

  }
}
