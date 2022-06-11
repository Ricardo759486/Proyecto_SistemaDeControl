import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MaterialCuadrilla} from "../../../../shared/models/MaterialCuadrilla";
import {
  TablaAdminMaterialcuadrillaService
} from "../../../../shared/services/admin/tabla_materialcuadrilla/tabla-admin-materialcuadrilla.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import Swal from "sweetalert2";
import {
  MaterialcuadrillaAdminModalComponent
} from "../materialcuadrilla-admin-modal/materialcuadrilla-admin-modal.component";

@Component({
  selector: 'app-tabla-materialcuadrilla',
  templateUrl: './tabla-materialcuadrilla.component.html',
  styleUrls: ['./tabla-materialcuadrilla.component.scss']
})
export class TablaMaterialcuadrillaComponent implements OnInit {

  materialcuadrilla: MaterialCuadrilla[] = [];
  displayedColumns: string[] = ['ID', 'Cuadrilla','Material','Cantidad'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;



  constructor(private tabla_admin_materialcuadrillascv: TablaAdminMaterialcuadrillaService,
              private router:Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tabla_admin_materialcuadrillascv.getMaterialesCuadrilla().subscribe(data =>{
      this.materialcuadrilla = data;
      this.dataSource.data = this.materialcuadrilla;
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

  Delete(materialcuadrilla: MaterialCuadrilla) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras recuperar lo asignado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.tabla_admin_materialcuadrillascv.deleteMaterialCuadrilla(materialcuadrilla).subscribe(data => {
          this.materialcuadrilla = this.materialcuadrilla.filter(p => p !== materialcuadrilla);
          Swal.fire(
            'Eliminado!',
            'Material asignado eliminada.',
            'success'
          )
          location.href = "/admin/materialcuadrilla_admin";
        })
      }
    })

  }


  Agregar() {
    this.openDialog();
  }
  Editar(materialcuadrilla: MaterialCuadrilla) {
    this.openDialog(materialcuadrilla);
  }

  openDialog(materialcuadrilla?: MaterialCuadrilla): void {
    const config = {
      data: {
        message: materialcuadrilla ? 'Editar' : 'Agregar',
        content: materialcuadrilla
      }
    };
    const dialogRef = this.dialog.open(MaterialcuadrillaAdminModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}

