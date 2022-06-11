import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-cuadrilla-admin-modal',
  templateUrl: './cuadrilla-admin-modal.component.html',
  styleUrls: ['./cuadrilla-admin-modal.component.scss']
})
export class CuadrillaAdminModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<CuadrillaAdminModalComponent>,
              // tslint:disable-next-line: align
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
