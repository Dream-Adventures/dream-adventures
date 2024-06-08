import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Places } from '../models/places';
import { isPlatformBrowser } from '@angular/common';
import { CountryDataService } from './country-data.service';

@Injectable({
  providedIn: 'root'
})


export class ConstantService {
  directWaLink = "https://web.whatsapp.com/send?phone=+";
  whatslink = "https://wa.me/";
  whatsapp = "919972736830";

  getEncodedUrl(message: string) {
    return encodeURIComponent(message);
  }

  whatsappBook(place: string) {
    const book = "I would like to book my travel to ";
    if (this.isMobile()) {
      return this.whatslink + this.whatsapp + "?text=" + this.getEncodedUrl(book) + place;
    } else {
      return this.directWaLink + this.whatsapp + "&text=" + this.getEncodedUrl(book) + place;
    }
  }

  whatsappCallBack(place: string) {
    const call = "Please call me back. I have some questions regarding my travel plans to ";
    if (this.isMobile()) {
      return this.whatslink + this.whatsapp + "?text=" + this.getEncodedUrl(call) + place;
    } else {
      return this.directWaLink + this.whatsapp + "&text=" + this.getEncodedUrl(call) + place;
    }
  }

  whatsappBookNow() {
    const call = "I would like to book my travel";
    if (this.isMobile()) {
      return this.whatslink + this.whatsapp + "?text=" + this.getEncodedUrl(call);
    } else {
      return this.directWaLink + this.whatsapp + "&text=" + this.getEncodedUrl(call);
    }
  }

  // isMobile() : boolean {
  //   return /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  // }
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isMobile(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    return false;
  }

  
  
  
  

}
