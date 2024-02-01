import { Injectable } from '@angular/core';

@Injectable(
  //{ providedIn: 'root'}
)
export class ServiceOneService {
  value:string = 'service-one';

  constructor() { 
    console.log('service one is instantiated');
  }
}
