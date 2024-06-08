import { Component, ElementRef, OnInit, Renderer2, inject } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ParallaxHeadingComponent } from '../../shared/parallax-heading/parallax-heading.component';
import { SharedService } from '../../shared/shared.service';
import { DestinationModalComponent } from '../destination-modal/destination-modal.component';
import { CommonModule } from '@angular/common';
import { ConstantService } from '../../shared/constant.service';
import { DestinationModalPlacesComponent } from './destination-modal-places/destination-modal-places.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, ParallaxHeadingComponent, DestinationModalComponent, CommonModule, MatButtonModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {
  // constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  constantService = inject(ConstantService);
  sharedService = inject(SharedService);
  // ngOnInit() {
  //   this.sharedService.destination = this.constantService.getPlaceByKey("bangalore");
  //   this.openModal();
  // }
  
  openModal() {
    this.sharedService.isDestinationModalVisible = true;
  }

  closeModal() {
    this.sharedService.isDestinationModalVisible = false;
  }

  isEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
  }

  
  waBook(place: string) {
    return this.constantService.whatsappBook(place);
  }
  
  waCall(place: string) {
    return this.constantService.whatsappCallBack(place);
  }

}
