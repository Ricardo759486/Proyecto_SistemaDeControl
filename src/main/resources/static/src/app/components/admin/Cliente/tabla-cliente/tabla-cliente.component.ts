import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {TablaAdminClienteService} from "../../../../shared/services/admin/tabla_cliente/tabla-admin-cliente.service";
import {Cliente} from "../../../../shared/models/Cliente";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import Swal from "sweetalert2";
import {ClienteAdminModalComponent} from "../cliente-admin-modal/cliente-admin-modal.component";

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-tabla-cliente',
  templateUrl: './tabla-cliente.component.html',
  styleUrls: ['./tabla-cliente.component.scss']
})
export class TablaClienteComponent implements OnInit {

  cliente: Cliente[] = [];
  displayedColumns: string[] = ['ID', 'numeroDocumento','direccion','estado','actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  constructor(private tabla_admin_clientescv: TablaAdminClienteService,
              private router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tabla_admin_clientescv.getClientes().subscribe(data =>{
      this.cliente = data;
      this.dataSource.data = this.cliente;
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

  Editar(cliente: Cliente) {

  }

  Delete(cliente: Cliente) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.tabla_admin_clientescv.deleteCliente(cliente).subscribe(data => {
          this.cliente = this.cliente.filter(p => p !== cliente);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          location.href = "/admin/cliente_admin";
        })
      }
    })

  }

  Agregar() {
    this.openDialog();
  }
  openDialog(cliente?: Cliente): void {
    const config = {
      data: {
        message: cliente ? 'Editar' : 'Agregar',
        content: cliente
      }
    };
    const dialogRef = this.dialog.open(ClienteAdminModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }
}
