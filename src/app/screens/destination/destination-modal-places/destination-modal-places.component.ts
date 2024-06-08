import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CountryDataService } from '../../../shared/country-data.service';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-destination-modal-places',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './destination-modal-places.component.html',
  styleUrl: './destination-modal-places.component.css'
})

export class DestinationModalPlacesComponent {
  constructor(private dialogRef: MatDialogRef<DestinationModalPlacesComponent>, public countryData: CountryDataService) {}
  // router = inject(Router);
  sharedService = inject(SharedService);
  countryDataService = inject(CountryDataService);

  placesInColumns: any[][] = [];

  ngOnInit() {
    this.splitPlacesIntoColumns();
  }

  splitPlacesIntoColumns() {
    const places = this.countryData.places;
    const columnCount = 3;
    const columnSize = Math.ceil(places.length / columnCount);

    for (let i = 0; i < columnCount; i++) {
      this.placesInColumns[i] = places.slice(i * columnSize, (i + 1) * columnSize);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  
  gotoCity(city: string) {
    // this.router.navigateByUrl("/destination");
    this.sharedService.destination = this.countryDataService.getPlaceByPlace(city);
    this.closeDialog();
    this.sharedService.isDestinationModalVisible = false;
  }


  
}
