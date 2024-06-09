import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ParallaxHeadingComponent } from '../../shared/parallax-heading/parallax-heading.component';
import { CommonModule } from '@angular/common';
import { CountryDataService } from '../../shared/country-data.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, ParallaxHeadingComponent, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  countryDataService = inject(CountryDataService);
  images = [
    { src: '/assets/gotours/imgs/city/bali.jpg', name: 'Image 1' },
    { src: '/assets/gotours/imgs/city/bali.jpg', name: 'Image 2' },
    { src: '/assets/gotours/imgs/city/bali.jpg', name: 'Image 3' },
    // Add more images as needed
  ];

  ngOnInit() {
    this.images = this.countryDataService.places.map(place => {
      return {
        src: place.image,
        name: place.country
      };
    });
  }

  

  fullScreenImage: any;

  showFullScreen(image: any) {
    this.fullScreenImage = image;
  }

  hideFullScreen() {
    this.fullScreenImage = null;
  }
}
