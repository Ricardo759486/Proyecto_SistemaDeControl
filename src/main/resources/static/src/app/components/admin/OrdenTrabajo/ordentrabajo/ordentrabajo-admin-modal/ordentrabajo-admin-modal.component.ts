import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-ordentrabajo-admin-modal',
  templateUrl: './ordentrabajo-admin-modal.component.html',
  styleUrls: ['./ordentrabajo-admin-modal.component.scss']
})
export class OrdentrabajoAdminModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<OrdentrabajoAdminModalComponent>,
              // tslint:disable-next-line: align
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
