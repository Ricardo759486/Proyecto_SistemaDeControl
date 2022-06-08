import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Cuadrilla} from "../../../../shared/models/Cuadrilla";
import {CuadrillaAdminService} from "../../../../shared/services/admin/tabla_cuadrilla/cuadrilla-admin.service";
import {Proveedor} from "../../../../shared/models/Proveedor";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-tabla-cuadrilla',
  templateUrl: './tabla-cuadrilla.component.html',
  styleUrls: ['./tabla-cuadrilla.component.scss']
})
export class TablaCuadrillaComponent implements OnInit {

  cuadrilla: Cuadrilla[] = [];
  displayedColumns: string[] = ['ID', 'movil_Asociado','proveedor','turno_trabajo','zona', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  constructor(private tabla_admin_cuadrillascv: CuadrillaAdminService, private router:Router) { }

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
    this.tabla_admin_cuadrillascv.deleteCuadrilla(cuadrilla).subscribe(data => {
      this.cuadrilla = this.cuadrilla.filter(p => p !== cuadrilla);
      alert("Cuadrilla Eliminada");
    })
  }
  Agregar(){

  }
}
