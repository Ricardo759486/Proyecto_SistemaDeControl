import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Telefono} from "../../../../shared/models/Telefono";
import {TablaAdminTelefonoService} from "../../../../shared/services/admin/tabla_telefono/tabla-admin-telefono.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {Proveedor} from "../../../../shared/models/Proveedor";
import Swal from "sweetalert2";
import {TelefonoAdminModalComponent} from "../telefono-admin-modal/telefono-admin-modal.component";

@Component({
  selector: 'app-tabla-telefono',
  templateUrl: './tabla-telefono.component.html',
  styleUrls: ['./tabla-telefono.component.scss']
})
export class TablaTelefonoComponent implements OnInit {

  telefono: Telefono[] = [];
  displayedColumns: string[] = ['ID', 'Numero','Tipo','Cliente','Proveedor', 'Usuario'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private tabla_admin_telefonoscv: TablaAdminTelefonoService,
              private router:Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tabla_admin_telefonoscv.getTelefonos().subscribe(data =>{
      this.telefono = data;
      this.dataSource.data = this.telefono;
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

  Delete(telefono: Telefono) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras recuperar el telefono",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.tabla_admin_telefonoscv.deleteTelefono(telefono).subscribe(data => {
          this.telefono = this.telefono.filter(p => p !== telefono);
          Swal.fire(
            'Eliminado!',
            'Telefono eliminado.',
            'success'
          )
          location.href = "/admin/telefono_admin";
        })
      }
    })

  }


  Agregar() {
    this.openDialog();
  }
  Editar(telefono: Telefono) {
    this.openDialog(telefono);
  }

  openDialog(telefono?: Telefono): void {
    const config = {
      data: {
        message: telefono ? 'Editar' : 'Agregar',
        content: telefono
      }
    };
    const dialogRef = this.dialog.open(TelefonoAdminModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}
