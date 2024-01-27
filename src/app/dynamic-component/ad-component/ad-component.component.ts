import { Component, inject } from '@angular/core';
import { AdService } from '../ad-service.service';

@Component({
  selector: 'app-ad-component',
  templateUrl: './ad-component.component.html',
  styleUrl: './ad-component.component.css'
  
})
export class AdComponentComponent {
  private adList = inject(AdService).getAds();

  private currentAdIndex = 0;

  get currentAd() {
    return this.adList[this.currentAdIndex];
  }

  displayNextAd() {
    this.currentAdIndex++;
    // Reset the current ad index back to `0` when we reach the end of an array.
    if (this.currentAdIndex === this.adList.length) {
      this.currentAdIndex = 0;
    }
  }

}
