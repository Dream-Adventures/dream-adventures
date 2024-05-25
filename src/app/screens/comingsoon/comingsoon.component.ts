import { Component } from '@angular/core';

@Component({
  selector: 'app-comingsoon',
  standalone: true,
  imports: [],
  templateUrl: './comingsoon.component.html',
  styleUrl: './comingsoon.component.css'
})
export class ComingsoonComponent {
  targetDate: Date = new Date('2024-06-03T00:00:00');
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
    this.updateCountdown();
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown(): void {
    const currentDate = new Date().getTime();
    const distance = this.targetDate.getTime() - currentDate;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}
