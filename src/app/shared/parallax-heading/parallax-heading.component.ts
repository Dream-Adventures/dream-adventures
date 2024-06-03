import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parallax-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parallax-heading.component.html',
  styleUrl: './parallax-heading.component.css'
})
export class ParallaxHeadingComponent {
  @Input() heading!: string;
  @Input() bgImage!: string;

  sharedService = inject(SharedService);
}
