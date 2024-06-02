import { NgStyle } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SharedService } from '../../shared/shared.service';
import { ComingsoonOtpModalComponent } from '../comingsoon-otp-modal/comingsoon-otp-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-comingsoon',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './comingsoon.component.html',
  styleUrl: './comingsoon.component.css',
})
export class ComingsoonComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  sharedService = inject(SharedService);
  backgroundImageUrl!: string;
  targetDate: Date = new Date('2024-06-04T00:00:00');
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
    this.backgroundImageUrl = `${environment.baseHref}assets/img/bg.jpg`;
    this.updateCountdown();
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown(): void {
    const currentDate = new Date().getTime();
    const distance = this.targetDate.getTime() - currentDate;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }

  closeSoon() {
    const dialogRef = this.dialog.open(ComingsoonOtpModalComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === '1234') {
        // Replace '1234' with your OTP check logic
        console.log('OTP matched! Redirect to home page.');
        // Add your navigation logic here
        this.sharedService.isComingSoon = false;
      } else {
        console.log('OTP did not match.');
      }
    });
  }
}
