import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {Router} from "@angular/router";
import {Cuadrilla} from "../../../../shared/models/Cuadrilla";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import Swal from 'sweetalert2';
import {MatDialog} from "@angular/material/dialog";
import {CuadrillaAdminModalComponent} from "../cuadrilla-admin-modal/cuadrilla-admin-modal.component";

@Component({
  selector: 'app-tabla-cuadrilla',
  templateUrl: './tabla-cuadrilla.component.html',
  styleUrls: ['./tabla-cuadrilla.component.scss']
})
export class TablaCuadrillaComponent implements OnInit, AfterViewInit {

  cuadrilla: Cuadrilla[] = [];
  displayedColumns: string[] = ['ID', 'movil_Asociado','proveedor','turno_trabajo','zona', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private tabla_admin_cuadrillascv: CuadrillaAdminService, private router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tabla_admin_cuadrillascv.getCuadrilla().subscribe(data =>{
      this.cuadrilla = data;
      this.dataSource.data = this.cuadrilla;
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


  Editar(cuadrilla: Cuadrilla) {

  }

  Delete(cuadrilla: Cuadrilla) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras recuperar la cuadrilla",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.tabla_admin_cuadrillascv.deleteCuadrilla(cuadrilla).subscribe(data => {
          this.cuadrilla = this.cuadrilla.filter(p => p !== cuadrilla);
          Swal.fire(
            'Eliminado!',
            'Cuadrilla eliminada.',
            'success'
          )
          location.href = "/admin/cuadrilla_admin";
        })
      }
    })

  }
  Agregar() {
    this.openDialog();
  }
  openDialog(cuadrilla?: Cuadrilla): void {
    const config = {
      data: {
        message: cuadrilla ? 'Editar' : 'Agregar',
        content: cuadrilla
      }
    };
    const dialogRef = this.dialog.open(CuadrillaAdminModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}

