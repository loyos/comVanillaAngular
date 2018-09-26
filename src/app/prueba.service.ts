import { Injectable } from '@angular/core';

declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor() {
    window.vanillaToAngularCallback = data => {
      return 2;
    }
   }
}
