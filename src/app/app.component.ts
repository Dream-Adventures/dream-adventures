import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { ComingsoonComponent } from './screens/comingsoon/comingsoon.component';
import { HomeComponent } from './screens/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ComingsoonComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-dreamadventures';
  production = environment.production;

}
