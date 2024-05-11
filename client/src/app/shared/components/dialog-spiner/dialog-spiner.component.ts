import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorInterface } from '../../interface/error';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-dialog-spiner',
  templateUrl: './dialog-spiner.component.html',
  styleUrls: ['./dialog-spiner.component.css'],
  standalone: true,
  imports: [MaterialModule],
})
export class DialogSpinerComponent {
  constructor(public dialogRef: MatDialogRef<DialogSpinerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorInterface) {
  }
}
