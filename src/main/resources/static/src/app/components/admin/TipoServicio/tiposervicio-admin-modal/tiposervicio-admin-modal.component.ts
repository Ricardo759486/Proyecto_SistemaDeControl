import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-tiposervicio-admin-modal',
  templateUrl: './tiposervicio-admin-modal.component.html',
  styleUrls: ['./tiposervicio-admin-modal.component.scss']
})
export class TiposervicioAdminModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<TiposervicioAdminModalComponent>,
              // tslint:disable-next-line: align
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
