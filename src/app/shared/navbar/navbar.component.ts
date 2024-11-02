import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SharedService } from '../shared.service';
import { ConstantService } from '../constant.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  router = inject(Router);
  sharedService = inject(SharedService);

  collapseNavbar() {
    const navbarCollapse = document.getElementById('show-menu');
    if (navbarCollapse!.classList.contains('show')) {
      navbarCollapse!.classList.remove('show');
    }
  }

  clickDestination() {
    this.collapseNavbar();
    this.router.navigateByUrl("/destination");
    this.sharedService.isDestinationModalVisible = true;
  }
  
  constantService = inject(ConstantService);

  waBook() {
    return this.constantService.whatsappBookNow();
  }
}
