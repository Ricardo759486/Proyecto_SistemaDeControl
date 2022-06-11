import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-telefono-admin-modal',
  templateUrl: './telefono-admin-modal.component.html',
  styleUrls: ['./telefono-admin-modal.component.scss']
})
export class TelefonoAdminModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<TelefonoAdminModalComponent>,
              // tslint:disable-next-line: align
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
