import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ParallaxHeadingComponent } from '../../shared/parallax-heading/parallax-heading.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [NavbarComponent, ParallaxHeadingComponent, FooterComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
