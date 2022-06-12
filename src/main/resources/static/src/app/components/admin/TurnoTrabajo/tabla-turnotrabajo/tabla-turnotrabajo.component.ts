import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {TurnoTrabajo} from "../../../../shared/models/TurnoTrabajo";
import {
  TablaAdminTurnotrabajoService
} from "../../../../shared/services/admin/tabla_turnotrabajo/tabla-admin-turnotrabajo.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import Swal from "sweetalert2";
import {TurnotrabajoAdminModalComponent} from "../turnotrabajo-admin-modal/turnotrabajo-admin-modal.component";

@Component({
  selector: 'app-tabla-turnotrabajo',
  templateUrl: './tabla-turnotrabajo.component.html',
  styleUrls: ['./tabla-turnotrabajo.component.scss']
})
export class TablaTurnotrabajoComponent implements OnInit {

  turnotrabajo: TurnoTrabajo[] = [];
  displayedColumns: string[] = ['ID', 'descripcion', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private tabla_admin_turnotrabajoscv: TablaAdminTurnotrabajoService,
              private router:Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tabla_admin_turnotrabajoscv.getTurnoTrabajo().subscribe(data =>{
      this.turnotrabajo = data;
      this.dataSource.data = this.turnotrabajo;
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

  Delete(turnotrabajo: TurnoTrabajo) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras recuperar el turno de trabajo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.tabla_admin_turnotrabajoscv.deleteTurnoTrabajo(turnotrabajo).subscribe(data => {
          this.turnotrabajo = this.turnotrabajo.filter(p => p !== turnotrabajo);
          Swal.fire(
            'Eliminado!',
            'Turno de trabajo eliminado.',
            'success'
          )
          location.href = "/admin/turnotrabajo_admin";
        })
      }
    })

  }

  Agregar() {
    this.openDialog();
  }
  Editar(turnotrabajo: TurnoTrabajo) {
    this.openDialog(turnotrabajo);
  }

  openDialog(turnotrabajo?: TurnoTrabajo): void {
    const config = {
      data: {
        message: turnotrabajo ? 'Editar' : 'Agregar',
        content: turnotrabajo
      }
    };
    const dialogRef = this.dialog.open(TurnotrabajoAdminModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}
