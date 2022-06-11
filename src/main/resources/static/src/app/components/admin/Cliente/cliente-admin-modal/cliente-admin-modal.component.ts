import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-cliente-admin-modal',
  templateUrl: './cliente-admin-modal.component.html',
  styleUrls: ['./cliente-admin-modal.component.scss']
})
export class ClienteAdminModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ClienteAdminModalComponent>,
              // tslint:disable-next-line: align
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
