import { Component, inject } from '@angular/core';
import { ConstantService } from '../../../shared/constant.service';

@Component({
  selector: 'app-video-background',
  standalone: true,
  imports: [],
  templateUrl: './video-background.component.html',
  styleUrl: './video-background.component.css'
})
export class VideoBackgroundComponent {
  constantService = inject(ConstantService);

  waBook() {
    return this.constantService.whatsappBookNow();
  }
}
