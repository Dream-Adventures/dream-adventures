import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isComingSoon = false;
  destination = "";
  isDestinationModalVisible = false;
  // destinationForm = new FormGroup({
  //   destination: new FormControl('', Validators.required),
  //   place: new FormControl('', Validators.required),
  // });

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
