import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-emi-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './emi-carousel.component.html',
  styleUrl: './emi-carousel.component.css'
})
export class EmiCarouselComponent  {

  slides = [
    { url: '/assets/gotours/imgs/DAS-Emi-1.jpg' },
    { url: '/assets/gotours/imgs/DAS-Emi-2.jpg' },
    { url: '/assets/gotours/imgs/DAS-Emi-3.jpg' },
    { url: '/assets/gotours/imgs/DAS-Emi-4.jpg' },
    { url: '/assets/gotours/imgs/DAS-Emi-5.jpg' }
  ];

  itemsPerSlide = 3;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    // Set initial itemsPerSlide based on window size if in the browser
    if (this.isBrowser) {
      this.updateItemsPerSlide(window.innerWidth);
    }
  }

  // Update itemsPerSlide when the window is resized (only in browser mode)
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.isBrowser) {
      this.updateItemsPerSlide(event.target.innerWidth);
    }
  }

  private updateItemsPerSlide(width: number): void {
    // Customize these values as needed
    if (width < 768) {
      this.itemsPerSlide = 1; // Mobile view
    } else {
      this.itemsPerSlide = 3; // Desktop view
    }
  }

}
