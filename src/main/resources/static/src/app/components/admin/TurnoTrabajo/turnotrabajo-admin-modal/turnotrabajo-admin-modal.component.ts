import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-turnotrabajo-admin-modal',
  templateUrl: './turnotrabajo-admin-modal.component.html',
  styleUrls: ['./turnotrabajo-admin-modal.component.scss']
})
export class TurnotrabajoAdminModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<TurnotrabajoAdminModalComponent>,
              // tslint:disable-next-line: align
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
