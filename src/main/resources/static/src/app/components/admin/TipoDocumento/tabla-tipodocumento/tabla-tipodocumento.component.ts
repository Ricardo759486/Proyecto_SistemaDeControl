import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {TipoDocumento} from "../../../../shared/models/TipoDocumento";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import Swal from "sweetalert2";
import {
  TablaAdminTipoDocumentoService
} from "../../../../shared/services/admin/tabla_tipoDocumento/tabla-admin-tipo-documento.service";
import {TipodocumentoAdminModalComponent} from "../tipodocumento-admin-modal/tipodocumento-admin-modal.component";

@Component({
  selector: 'app-tabla-tipodocumento',
  templateUrl: './tabla-tipodocumento.component.html',
  styleUrls: ['./tabla-tipodocumento.component.scss']
})
export class TablaTipodocumentoComponent implements OnInit {

  tipodocumento: TipoDocumento[] = [];
  displayedColumns: string[] = ['ID', 'descripcion', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private tabla_admin_tipodocumentoscv: TablaAdminTipoDocumentoService,
              private router:Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tabla_admin_tipodocumentoscv.getTipoDocumento().subscribe(data =>{
      this.tipodocumento = data;
      this.dataSource.data = this.tipodocumento;
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

  Delete(tipodocumento: TipoDocumento) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras recuperar el tipo de documento",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.tabla_admin_tipodocumentoscv.deleteTipoDocumento(tipodocumento).subscribe(data => {
          this.tipodocumento = this.tipodocumento.filter(p => p !== tipodocumento);
          Swal.fire(
            'Eliminado!',
            'Tipo de documento eliminado.',
            'success'
          )
          location.href = "/admin/tipodocumento_admin";
        })
      }
    })

  }

  Agregar() {
    this.openDialog();
  }
  Editar(tipodocumento: TipoDocumento) {
    this.openDialog(tipodocumento);
  }

  openDialog(tipodocumento?: TipoDocumento): void {
    const config = {
      data: {
        message: tipodocumento ? 'Editar' : 'Agregar',
        content: tipodocumento
      }
    };
    const dialogRef = this.dialog.open(TipodocumentoAdminModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}
