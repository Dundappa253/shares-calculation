import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'AddShareDetailPopup',
    templateUrl: 'add-share-detail-popup.html',
  })
  export class AddShareDetailPopup {
    loginForm: FormGroup;
    constructor(
      public dialogRef: MatDialogRef<AddShareDetailPopup>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
      this.loginForm = new FormGroup({
        noOfshares: new FormControl('', [Validators.required]),
        entryPrice: new FormControl('', [Validators.required])
      });
    }
  
    onNoClick(): void {
      console.warn('Your dialog closed');
      this.dialogRef.close();
    }

    onSubmit(): void {
      console.warn('Your order has been submitted');
      if (this.loginForm.valid) {
        console.log("Form Submitted!");
      }
      console.warn('Your order has been submitted', this.loginForm.value);
      this.loginForm.reset();
    }
  }

  
export interface DialogData {
    animal: string;
    name: string;
}