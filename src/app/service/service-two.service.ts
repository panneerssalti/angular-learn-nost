import { SubServiceService } from './sub-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTwoService {
  value:string = 'service-two';

  constructor(private subServiceService:SubServiceService) { 
    console.log(subServiceService.value);
    console.log('service two is instantiated');
  }
}
