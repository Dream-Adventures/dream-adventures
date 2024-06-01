import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ParallaxHeadingComponent } from '../../shared/parallax-heading/parallax-heading.component';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, ParallaxHeadingComponent, ],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {

}
