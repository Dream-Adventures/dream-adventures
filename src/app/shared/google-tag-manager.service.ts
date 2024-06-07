import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleTagManagerService {
  constructor() {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
    }
  }

  public event(eventName: string, params: {}) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, params);
    }
  }
}
