import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { CountryDataService } from '../../shared/country-data.service';
import { MyEmailJsService } from '../../my-email-js.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { EmiCarouselComponent } from './emi-carousel/emi-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, VideoBackgroundComponent, ReactiveFormsModule, EmiCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('backgroundVideo') backgroundVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    if (this.backgroundVideo) {
      this.backgroundVideo.nativeElement.playbackRate = 0.7; // Set the playback rate to 0.5 (half speed)
    }
  }

  yearPassed = new Date().getFullYear() - 2019;

  emailService = inject(MyEmailJsService);
  router = inject(Router)
  sharedService = inject(SharedService);
  countryDataService = inject(CountryDataService);
  enquirySubmitted = false;
  
  enquiryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  gotoCity(city: string) {
    this.router.navigateByUrl("/destination");
    this.sharedService.destination = this.countryDataService.getPlaceByKey(city);
  }

  submitEnq() {
    if (this.enquiryForm.valid) {
      console.log('submitting enquiry');
      this.enquirySubmitted = true;
      this.emailService
        .sendEmail(
          this.enquiryForm.value.name!, // userName
          'You got enquiry from', // action
          this.enquiryForm.value.email!, // fromEmail
          this.enquiryForm.value.phone!, // mobile
          this.enquiryForm.value.message! // message
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
