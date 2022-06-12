import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-zona-admin-modal',
  templateUrl: './zona-admin-modal.component.html',
  styleUrls: ['./zona-admin-modal.component.scss']
})
export class ZonaAdminModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ZonaAdminModalComponent>,
              // tslint:disable-next-line: align
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
