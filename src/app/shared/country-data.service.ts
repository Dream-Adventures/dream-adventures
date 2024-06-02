import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  constructor() { }
  

  stateGroups = [
    {
      letter: 'America',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    },
    {
      letter: 'India',
      names: ['Bangalore', 'Chennai', 'Hyderabad'],
    },
  ];
}
