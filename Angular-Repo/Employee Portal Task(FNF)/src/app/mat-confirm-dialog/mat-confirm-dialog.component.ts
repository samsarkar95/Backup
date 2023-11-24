import { Component, OnInit,inject } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.css'],

})
export class MatConfirmDialogComponent implements OnInit {

  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
  }
  // openDialog()
  // {
  //   this.dialog.open( DialogAnimationsExampleDialog, {
  //     width: '250px',
   
  //   });
  // }
}
  export class DialogAnimationsExampleDialog {
    constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
  }