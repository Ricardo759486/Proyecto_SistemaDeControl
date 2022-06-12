import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-material-admin-modal',
  templateUrl: './material-admin-modal.component.html',
  styleUrls: ['./material-admin-modal.component.scss']
})
export class MaterialAdminModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<MaterialAdminModalComponent>,
              // tslint:disable-next-line: align
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}

