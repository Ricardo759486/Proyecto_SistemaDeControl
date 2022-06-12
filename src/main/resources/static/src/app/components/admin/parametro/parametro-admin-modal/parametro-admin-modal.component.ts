import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-parametro-admin-modal',
  templateUrl: './parametro-admin-modal.component.html',
  styleUrls: ['./parametro-admin-modal.component.scss']
})
export class ParametroAdminModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ParametroAdminModalComponent>,
              // tslint:disable-next-line: align
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
