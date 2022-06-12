import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {TablaAdminZonaService} from "../../../../shared/services/admin/tabla_zona/tabla-admin-zona.service";
import {Zona} from "../../../../shared/models/Zona";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import Swal from "sweetalert2";
import {ZonaAdminModalComponent} from "../zona-admin-modal/zona-admin-modal.component";

@Component({
  selector: 'app-tabla-zona',
  templateUrl: './tabla-zona.component.html',
  styleUrls: ['./tabla-zona.component.scss']
})
export class TablaZonaComponent implements OnInit {

  zona: Zona[] = [];
  displayedColumns: string[] = ['ID', 'ciudad','coordenadas','localidad', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private tabla_admin_zonascv: TablaAdminZonaService,
              private router:Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tabla_admin_zonascv.getZonas().subscribe(data =>{
      this.zona = data;
      this.dataSource.data = this.zona;
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

  Delete(zona: Zona) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras recuperar la zona",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.tabla_admin_zonascv.deleteZona(zona).subscribe(data => {
          this.zona = this.zona.filter(p => p !== zona);
          Swal.fire(
            'Eliminado!',
            'Zona eliminada.',
            'success'
          )
          location.href = "/admin/zona_admin";
        })
      }
    })

  }

  Agregar() {
    this.openDialog();
  }
  Editar(zona: Zona) {
    this.openDialog(zona);
  }

  openDialog(zona?: Zona): void {
    const config = {
      data: {
        message: zona ? 'Editar' : 'Agregar',
        content: zona
      }
    };
    const dialogRef = this.dialog.open(ZonaAdminModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}
