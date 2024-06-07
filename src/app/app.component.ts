import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComingsoonComponent } from './screens/comingsoon/comingsoon.component';
import { HomeComponent } from './screens/home/home.component';
import { SharedService } from './shared/shared.service';
import { GoogleTagManagerService } from './shared/google-tag-manager.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ComingsoonComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(router: Router, gtmService: GoogleTagManagerService) {
  router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      gtmService.event('page_view', { page_path: event.urlAfterRedirects });
    }
  });
}
  
  sharedService = inject(SharedService);

  title = 'angular-dreamadventures';

  ngOnInit() {
    // this.sharedService.isComingSoon = environment.production;
    this.sharedService.isComingSoon = false;
  }

}
