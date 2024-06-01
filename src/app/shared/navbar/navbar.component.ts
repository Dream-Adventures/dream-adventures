import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  collapseNavbar() {
    const navbarCollapse = document.getElementById('show-menu');
    if (navbarCollapse!.classList.contains('show')) {
      navbarCollapse!.classList.remove('show');
    }
  }
}
