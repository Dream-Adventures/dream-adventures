import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ParallaxHeadingComponent } from '../../shared/parallax-heading/parallax-heading.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, ParallaxHeadingComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
