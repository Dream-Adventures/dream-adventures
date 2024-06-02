import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ParallaxHeadingComponent } from '../../shared/parallax-heading/parallax-heading.component';
import { SharedService } from '../../shared/shared.service';
import { DestinationModalComponent } from '../destination-modal/destination-modal.component';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, ParallaxHeadingComponent, DestinationModalComponent],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {

  sharedService = inject(SharedService);
  
  openModal() {
    this.sharedService.isDestinationModalVisible = true;
  }

  closeModal() {
    this.sharedService.isDestinationModalVisible = false;
  }
}
