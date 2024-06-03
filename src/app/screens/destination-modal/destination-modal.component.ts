import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
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

export interface Destins {
  place: string;
  image: string;
  description: string;
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
  ],
  templateUrl: './destination-modal.component.html',
  styleUrl: './destination-modal.component.css',
})
export class DestinationModalComponent implements OnInit {
  sharedService = inject(SharedService);
  myControl = new FormControl<Destins>({
    place: '',
    image: '',
    description: '',
  });
  options: Destins[] = [
    { place: 'Karnataka, India', image: '', description: '' },
    { place: 'Maharastra, India', image: '', description: '' },
    { place: 'Delhi, India', image: '', description: '' },
  ];
  filteredOptions!: Observable<Destins[]>;
  formError = false;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.place;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
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
      this.sharedService.destination = this.myControl.value?.place;
    } else {
      this.formError = true;
    }
  }
}
