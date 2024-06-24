import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../../shared/shared.service';
import { MyEmailJsService } from '../../my-email-js.service';
import { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-book-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './book-modal.component.html',
  styleUrl: './book-modal.component.css'
})
export class BookModalComponent {
  sharedService = inject(SharedService);
  emailService = inject(MyEmailJsService);
  isSubmitted = false;
  
  // openModal() {
  //   this.sharedService.isBookFormModalVisible = true;
  // }

  closeModal() {
    this.sharedService.isBookFormModalVisible = false;
  }
  
  onSubmit() {
    const bookForm = this.sharedService.bookForm;
    console.log(bookForm);
    if (bookForm.valid) {
      console.log('Form Submitted');
      this.emailService
        .sendEmail(
          bookForm.value.name!, // userName
          'You got holiday package enquiry from', // action
          '', // fromEmail
          bookForm.value.mobile!, // mobile
          "Enquiry for " + this.sharedService.bookFormModalTitle // message
        )
        .then((response: EmailJSResponseStatus) => {
          console.log('Email sent successfully!', response.status, response.text);
          this.isSubmitted = true;
        })
        .catch((error) => {
          console.error('Failed to send email. Error: ', error);
          this.isSubmitted = false;
        });
    } else {
      this.sharedService.bookForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}
