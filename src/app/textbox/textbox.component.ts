import { Component, OnInit,} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ObservorService } from '../observor.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
})
export class TextboxComponent implements OnInit {
  
  
  //Construct the service, do we need a new name here?
  //Is it assigned to a variable? Why do we have this in 
  //the constructor but not under oninit?
  constructor(private UsernameService: ObservorService, public dialog: MatDialog) { 
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  
  
  }

  public searchControl: FormControl = new FormControl('');

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(query => {
      this.UsernameService.observable.next(query);
      
    })
  };
      
    
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `<h1 mat-dialog-title>Hi</h1>`
 
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}