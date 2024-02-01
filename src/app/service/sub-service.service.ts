import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubServiceService {
  value:string = 'sub-service';

  constructor() { }
}
