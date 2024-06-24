import { NgStyle } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-price-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './price-card.component.html',
  styleUrl: './price-card.component.css'
})
export class PriceCardComponent {
  @Input() bgImage!: string;
  @Input() heading!: string;
  @Input() price!: string;

  
  sharedService = inject(SharedService);
  
  openModal(title: string) {
    console.log("opening modal");
    this.sharedService.isBookFormModalVisible = true;
    this.sharedService.bookFormModalTitle = title;
  }

  closeModal() {
    this.sharedService.isBookFormModalVisible = false;
  }
}
