import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-comingsoon-otp-modal',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatDialogModule,MatFormFieldModule,MatInputModule],
  templateUrl: './comingsoon-otp-modal.component.html',
  styleUrl: './comingsoon-otp-modal.component.css'
})
export class ComingsoonOtpModalComponent {
  otp: string = '';

  constructor(public dialogRef: MatDialogRef<ComingsoonOtpModalComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.otp);
  }
}
