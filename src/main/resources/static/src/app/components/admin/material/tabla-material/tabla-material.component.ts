import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MaterialAdminService} from "../../../../shared/services/admin/tabla_material/material-admin.service";
import {Material} from "../../../../shared/models/Material";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import Swal from "sweetalert2";
import {MaterialAdminModalComponent} from "../material-admin-modal/material-admin-modal.component";

@Component({
  selector: 'app-tabla-material',
  templateUrl: './tabla-material.component.html',
  styleUrls: ['./tabla-material.component.scss']
})
export class TablaMaterialComponent implements OnInit {

  material: Material[] = [];
  displayedColumns: string[] = ['ID', 'nombre','cantidad','costo', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private tabla_admin_materialscv: MaterialAdminService,
              private router:Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tabla_admin_materialscv.getMaterial().subscribe(data =>{
      this.material = data;
      this.dataSource.data = this.material;
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

  Delete(material: Material) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras recuperar el material",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.tabla_admin_materialscv.deleteMaterial(material).subscribe(data => {
          this.material = this.material.filter(p => p !== material);
          Swal.fire(
            'Eliminado!',
            'Material eliminado.',
            'success'
          )
          location.href = "/admin/material_admin";
        })
      }
    })

  }

  Agregar() {
    this.openDialog();
  }
  Editar(material: Material) {
    this.openDialog(material);
  }

  openDialog(material?: Material): void {
    const config = {
      data: {
        message: material ? 'Editar' : 'Agregar',
        content: material
      }
    };
    const dialogRef = this.dialog.open(MaterialAdminModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}

