import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {
  TablaAdminTiposervicioService
} from "../../../../shared/services/admin/tabla_tiposervicio/tabla-admin-tiposervicio.service";
import {TipoServicio} from "../../../../shared/models/TipoServicio";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import Swal from "sweetalert2";
import {TiposervicioAdminModalComponent} from "../tiposervicio-admin-modal/tiposervicio-admin-modal.component";

@Component({
  selector: 'app-tabla-tiposervicio',
  templateUrl: './tabla-tiposervicio.component.html',
  styleUrls: ['./tabla-tiposervicio.component.scss']
})
export class TablaTiposervicioComponent implements OnInit {

  tiposervicio: TipoServicio[] = [];
  displayedColumns: string[] = ['ID', 'descripcion', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private tabla_admin_tiposervicioscv: TablaAdminTiposervicioService,
              private router:Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tabla_admin_tiposervicioscv.getTipoServicios().subscribe(data =>{
      this.tiposervicio = data;
      this.dataSource.data = this.tiposervicio;
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

  Delete(tiposervicio: TipoServicio) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras recuperar el tipo de servicio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.tabla_admin_tiposervicioscv.deleteTipoServicio(tiposervicio).subscribe(data => {
          this.tiposervicio = this.tiposervicio.filter(p => p !== tiposervicio);
          Swal.fire(
            'Eliminado!',
            'Tipo de servicio eliminado.',
            'success'
          )
          location.href = "/admin/tiposervicio_admin";
        })
      }
    })

  }

  Agregar() {
    this.openDialog();
  }
  Editar(tiposervicio: TipoServicio) {
    this.openDialog(tiposervicio);
  }

  openDialog(tiposervicio?: TipoServicio): void {
    const config = {
      data: {
        message: tiposervicio ? 'Editar' : 'Agregar',
        content: tiposervicio
      }
    };
    const dialogRef = this.dialog.open(TiposervicioAdminModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}
