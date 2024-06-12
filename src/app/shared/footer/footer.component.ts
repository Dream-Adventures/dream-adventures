import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MyEmailJsService } from '../../my-email-js.service';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  newsletterSubmitted = false;
  emailService = inject(MyEmailJsService);
  enquiryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  private scriptUrl = '';

  submitForm() {
    if (this.enquiryForm.valid) {
      console.log('submitting newsletter');
      this.newsletterSubmitted = true;
      this.emailService
        .sendEmail(
          this.enquiryForm.value.name!, // userName
          'You got subscription from', // action
          this.enquiryForm.value.email!, // fromEmail
          '-', // mobile
          'News letter subscription for ' + this.enquiryForm.value.email! // message
        )
        .then((response: EmailJSResponseStatus) => {
          console.log('Email sent successfully!', response.status, response.text);
        })
        .catch((error) => {
          console.error('Failed to send email. Error: ', error);
        });
    } else {
      alert("Invalid details, please check!");
    }
    
  }
}
