import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-usuario-admin-modal',
  templateUrl: './usuario-admin-modal.component.html',
  styleUrls: ['./usuario-admin-modal.component.scss']
})
export class UsuarioAdminModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<UsuarioAdminModalComponent>,
              // tslint:disable-next-line: align
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
