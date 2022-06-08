import { Component, OnInit, ViewChild} from '@angular/core';
import {Proveedor} from "../../../../shared/models/Proveedor";
import {TablaAdminProveedorService} from "../../../../shared/services/admin/tabla_proveedor/tabla-admin-proveedor.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}


@Component({
  selector: 'app-tabla-proveedor',
  templateUrl: './tabla-proveedor.component.html',
  styleUrls: ['./tabla-proveedor.component.scss']
})
export class TablaProveedorComponent implements OnInit {

  proveedor: Proveedor[] = [];
  displayedColumns: string[] = ['ID', 'nombre','nit','email','direccion', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;



  constructor(private tabla_admin_provvedorscv: TablaAdminProveedorService, private router:Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tabla_admin_provvedorscv.getProveedores().subscribe(data =>{
      this.proveedor = data;
      this.dataSource.data = this.proveedor;
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

  Editar(proveedor: Proveedor) {

  }

  Delete(proveedor: Proveedor) {
    this.tabla_admin_provvedorscv.deleteProveedor(proveedor).subscribe(data => {
      this.proveedor = this.proveedor.filter(p => p !== proveedor);
      alert("Proveedor Eliminado");
    })
  }


  Agregar() {

  }
}
