import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ConstantService } from '../../shared/constant.service';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('backgroundVideo') backgroundVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    if (this.backgroundVideo) {
      this.backgroundVideo.nativeElement.playbackRate = 0.7; // Set the playback rate to 0.5 (half speed)
    }
  }
  router = inject(Router)
  sharedService = inject(SharedService);
  constantService = inject(ConstantService);

  gotoCity(city: string) {
    this.router.navigateByUrl("/destination");
    this.sharedService.destination = this.constantService.getPlaceByKey(city);
  }

  waBook() {
    return this.constantService.whatsappBookNow();
  }
}
