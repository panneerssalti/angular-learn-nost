import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-encapsulation',
  templateUrl: './shadow-encapsulation.component.html',
  styleUrl: './shadow-encapsulation.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowEncapsulationComponent {

}
