import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ParallaxHeadingComponent } from '../../shared/parallax-heading/parallax-heading.component';
import { PriceCardComponent } from '../../shared/price-card/price-card.component';
import { SharedService } from '../../shared/shared.service';
import { BookModalComponent } from '../book-modal/book-modal.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, ParallaxHeadingComponent, FooterComponent, PriceCardComponent, BookModalComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
}
