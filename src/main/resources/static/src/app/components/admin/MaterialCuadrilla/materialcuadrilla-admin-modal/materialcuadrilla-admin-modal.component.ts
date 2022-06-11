import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-materialcuadrilla-admin-modal',
  templateUrl: './materialcuadrilla-admin-modal.component.html',
  styleUrls: ['./materialcuadrilla-admin-modal.component.scss']
})
export class MaterialcuadrillaAdminModalComponent implements OnInit {

  constructor(public dialog: MatDialogRef<MaterialcuadrillaAdminModalComponent>,
              // tslint:disable-next-line: align
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
