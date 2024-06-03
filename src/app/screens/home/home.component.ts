import { Component, inject } from '@angular/core';
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
  router = inject(Router)
  sharedService = inject(SharedService);
  constantService = inject(ConstantService);

  gotoCity(city: string) {
    this.router.navigateByUrl("/destination");
    this.sharedService.destination = this.constantService.getPlaceByKey(city);
  }
}
