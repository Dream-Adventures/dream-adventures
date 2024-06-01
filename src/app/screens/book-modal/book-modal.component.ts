import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-book-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './book-modal.component.html',
  styleUrl: './book-modal.component.css'
})
export class BookModalComponent {
  sharedService = inject(SharedService);
  
  openModal() {
    this.sharedService.isBookFormModalVisible = true;
  }

  closeModal() {
    this.sharedService.isBookFormModalVisible = false;
  }
  
  onSubmit() {
    console.log(this.sharedService.bookForm.value);
    if (this.sharedService.bookForm.valid) {
      console.log('Form Submitted');
      // this.isExistingCaptain();
    } else {
      this.sharedService.bookForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}
