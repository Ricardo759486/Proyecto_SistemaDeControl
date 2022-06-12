import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Proveedor} from "../../../../shared/models/Proveedor";
import {
  TablaAdminProveedorService
} from "../../../../shared/services/admin/tabla_proveedor/tabla-admin-proveedor.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-proveedor-admin-editar',
  templateUrl: './proveedor-admin-editar.component.html',
  styleUrls: ['./proveedor-admin-editar.component.scss']
})
export class ProveedorAdminEditarComponent implements OnInit {

  loading: any;
  errorInicio: boolean = false;
  mensajeError: any = "No se pudo actualizar el proveedor";
  @Input() proveedor : Proveedor;

  constructor(private  provedorscv: TablaAdminProveedorService, private router:Router,public dialog: MatDialog) {
  }
  public editProveedor = new FormGroup({
    nit: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    nombre: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.initValuesForm();
  }
  confirmar(resultant:Proveedor){
    this.loading=false;
    if(resultant){
      alert("Proveedor actualizado");
      this.dialog.closeAll();
      location.href = "/admin/provedor_admin";
    }else{
      alert("No se pudo actualizar el proveedor");
    }
  }
  editar_proveedor(proveedor: Proveedor){

    proveedor.idProveedor= this.proveedor.idProveedor;
    proveedor.estado= this.proveedor.estado;
    this.loading=true;

    if ( this.editProveedor.valid) {
      this.provedorscv.editarProveedor(proveedor).subscribe(
        data => {
          this.confirmar(data);
        })
    }else {
      alert("No se pudo actualizar el proveedor");
      this.loading=false;
    }
  }
  private initValuesForm(): void {
    this.editProveedor.patchValue({
      idProveedor: this.proveedor.idProveedor,
      nit: this.proveedor.nit,
      nombre: this.proveedor.nombre,
      email: this.proveedor.email,
      direccion: this.proveedor.direccion
    });
  }
}
