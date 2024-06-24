import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Places } from '../models/places';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isComingSoon = false;
  destination:Places|null = null;
  isDestinationModalVisible = false;

  bookFormModalTitle = '';
  isBookFormModalVisible = false;
  bookForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mobile:new FormControl('', [
      Validators.required,
      Validators.pattern('^\\d{10}$'),
    ]),
  });

  constructor() { }
}
