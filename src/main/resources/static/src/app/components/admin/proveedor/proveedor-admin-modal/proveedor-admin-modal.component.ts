import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-proveedor-admin-modal',
  templateUrl: './proveedor-admin-modal.component.html',
  styleUrls: ['./proveedor-admin-modal.component.scss']
})
export class ProveedorAdminModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ProveedorAdminModalComponent>,
              // tslint:disable-next-line: align
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
