import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Auditoria} from "../../../../shared/models/Auditoria";
import {TablaAuditoriaService} from "../../../../shared/services/admin/tabla_auditoria/tabla-auditoria.service";

@Component({
  selector: 'app-tabla-auditoria',
  templateUrl: './tabla-auditoria.component.html',
  styleUrls: ['./tabla-auditoria.component.scss']
})
export class TablaAuditoriaComponent implements OnInit {

  auditoria: Auditoria[] = [];
  displayedColumns: string[] = ['ID', 'fecha_hora','ipusuario','operacioncrud','tabla', 'idusuario'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private tabla_admin_auditoriascv: TablaAuditoriaService,
              private router:Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tabla_admin_auditoriascv.getAuditorias().subscribe(data =>{
      this.auditoria = data;
      this.dataSource.data = this.auditoria;
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
}

