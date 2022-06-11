import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {OrdenTrabajo} from "../../../../shared/models/OrdenTrabajo";
import {
  TablaAdminOrdentrabajoService
} from "../../../../shared/services/admin/tabla_ordentrabajo/tabla-admin-ordentrabajo.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import Swal from "sweetalert2";
import {
  OrdentrabajoAdminModalComponent
} from "../ordentrabajo/ordentrabajo-admin-modal/ordentrabajo-admin-modal.component";

@Component({
  selector: 'app-tabla-ordentrabajo',
  templateUrl: './tabla-ordentrabajo.component.html',
  styleUrls: ['./tabla-ordentrabajo.component.scss']
})
export class TablaOrdentrabajoComponent implements OnInit {

  ordentrabajo: OrdenTrabajo[] = [];
  displayedColumns: string[] = ['ID', 'descripcion','cliente','cuadrilla','tiposervicio', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  constructor(private tabla_admin_ordentrabajoscv: TablaAdminOrdentrabajoService,
              private router:Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tabla_admin_ordentrabajoscv.getOrdenTrabajos().subscribe(data =>{
      this.ordentrabajo = data;
      this.dataSource.data = this.ordentrabajo;
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

  Delete(ordentrabajo: OrdenTrabajo) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras recuperar la orden de trabajo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.tabla_admin_ordentrabajoscv.deleteOrdenTrabajo(ordentrabajo).subscribe(data => {
          this.ordentrabajo = this.ordentrabajo.filter(p => p !== ordentrabajo);
          Swal.fire(
            'Eliminado!',
            'Orden de trabajo eliminada.',
            'success'
          )
          location.href = "/admin/ordentrabajo_admin";
        })
      }
    })

  }

  Agregar() {
    this.openDialog();
  }
  Editar(ordentrabajo: OrdenTrabajo) {
    this.openDialog(ordentrabajo);
  }

  openDialog(ordentrabajo?: OrdenTrabajo): void {
    const config = {
      data: {
        message: ordentrabajo ? 'Editar' : 'Agregar',
        content: ordentrabajo
      }
    };
    const dialogRef = this.dialog.open(OrdentrabajoAdminModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}
