import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-tipodocumento-admin-modal',
  templateUrl: './tipodocumento-admin-modal.component.html',
  styleUrls: ['./tipodocumento-admin-modal.component.scss']
})
export class TipodocumentoAdminModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<TipodocumentoAdminModalComponent>,
              // tslint:disable-next-line: align
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
