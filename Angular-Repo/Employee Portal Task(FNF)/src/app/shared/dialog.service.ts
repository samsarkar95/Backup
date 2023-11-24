import { Injectable } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { result } from 'lodash';
MatConfirmDialogComponent
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog :MatDialog) { }
  result: boolean = false;
  openconfirmdialog()
  {
    let dialogRef=this.dialog.open(MatConfirmDialogComponent,{
      width: '390px',
      data:{
        
      }
    })
    dialogRef.afterClosed().subscribe(result=>{
     console.log(`Dialog Result : ${result}`);
    });
  }
  
}
