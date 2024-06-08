import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { Router } from '@angular/router';
import { ConstantService } from '../../shared/constant.service';
import { CountryDataService } from '../../shared/country-data.service';
import { SharedService } from '../../shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { DestinationModalPlacesComponent } from '../destination/destination-modal-places/destination-modal-places.component';
import { MatButtonModule } from '@angular/material/button';

export interface Destins {
  place: string;
  content: string;
}

@Component({
  selector: 'app-destination-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './destination-modal.component.html',
  styleUrl: './destination-modal.component.css',
})
export class DestinationModalComponent implements OnInit {
  constructor(public dialog: MatDialog) {};
  sharedService = inject(SharedService);
  constantService = inject(ConstantService);
  myControl = new FormControl<Destins>({
    place: '',
    content: '',
  });
  options: Destins[] = [
    // { place: 'Bangalore, Karnataka, India', content: 'bangalore'},
    // { place: 'Hyderabad, Andhra, India', content: 'hyderabad'},
    // { place: 'Mysore, Karnataka, India', content: 'mysore'},
    // { place: 'Dubai, UAE', content: 'dubai'},
    // { place: 'London, UK', content: 'london'},
    // { place: 'Malaysia', content: 'malaysia'},
    // { place: 'Paris, France', content: 'paris'},
  ];
  filteredOptions!: Observable<Destins[]>;
  formError = false;
  router = inject(Router);
  countryDataService = inject(CountryDataService);

  ngOnInit() {
    this.options = this.countryDataService.places.map(place => ({
      place: place.country,
      content: place.key
    }));
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.place;
        const nameOrList = name ? this._filter(name as string) : this.options.slice();
        return nameOrList;
      })
    );
  }

  ngOnDestroy() {
    this.sharedService.destination = null;
  }

  displayFn(user: Destins): string {
    return user && user.place ? user.place : '';
  }

  private _filter(place: string): Destins[] {
    const filterValue = place.toLowerCase();

    return this.options.filter((option) =>
      option.place.toLowerCase().includes(filterValue)
    );
  }

  openModal() {
    this.sharedService.isDestinationModalVisible = true;
  }

  closeModal() {
    this.sharedService.isDestinationModalVisible = false;
  }

  onSubmit() {
    console.log(this.myControl.value);
    if (this.myControl.value?.place) {
      this.closeModal();
      this.formError = false;
      const selct:string = this.myControl.value.content;
      this.sharedService.destination = this.countryDataService.getPlaceByKey(selct);
      this.router.navigateByUrl("/destination");
    } else {
      this.sharedService.destination = null;
      this.formError = true;
    }
  }

  
  openDialog(): void {
    this.dialog.open(DestinationModalPlacesComponent, {
      data: { message: 'Hello, world!' }
    });
  }
}
