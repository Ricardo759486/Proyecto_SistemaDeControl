import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Parametro} from "../../../../shared/models/Parametro";
import {
  TablaAdminParametroService
} from "../../../../shared/services/admin/tabla_parametro/tabla-admin-parametro.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import Swal from "sweetalert2";
import {ParametroAdminModalComponent} from "../parametro-admin-modal/parametro-admin-modal.component";

@Component({
  selector: 'app-tabla-parametro',
  templateUrl: './tabla-parametro.component.html',
  styleUrls: ['./tabla-parametro.component.scss']
})
export class TablaParametroComponent implements OnInit {

  parametro: Parametro[] = [];
  displayedColumns: string[] = ['ID', 'descripcion','tipo','valor', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private tabla_admin_parametroscv: TablaAdminParametroService,
              private router:Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tabla_admin_parametroscv.getParametros().subscribe(data =>{
      this.parametro = data;
      this.dataSource.data = this.parametro;
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

  Delete(parametro: Parametro) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras recuperar el parametro",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.tabla_admin_parametroscv.deleteParametro(parametro).subscribe(data => {
          this.parametro = this.parametro.filter(p => p !== parametro);
          Swal.fire(
            'Eliminado!',
            'Parametro eliminado.',
            'success'
          )
          location.href = "/admin/parametro_admin";
        })
      }
    })

  }

  Agregar() {
    this.openDialog();
  }
  Editar(parametro: Parametro) {
    this.openDialog(parametro);
  }

  openDialog(parametro?: Parametro): void {
    const config = {
      data: {
        message: parametro ? 'Editar' : 'Agregar',
        content: parametro
      }
    };
    const dialogRef = this.dialog.open(ParametroAdminModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}
