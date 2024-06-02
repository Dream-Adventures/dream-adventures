import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

export interface User {
  name: string;
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
export class DestinationModalComponent implements OnInit{
  sharedService = inject(SharedService);
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Karnataka, India'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions!: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  openModal() {
    this.sharedService.isDestinationModalVisible = true;
  }

  closeModal() {
    this.sharedService.isDestinationModalVisible = false;
  }

  onSubmit() {
    console.log(this.sharedService.destinationForm.value);
    if (this.sharedService.destinationForm.valid) {
      console.log('Form Submitted');
      // this.isExistingCaptain();
    } else {
      this.sharedService.destinationForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}
