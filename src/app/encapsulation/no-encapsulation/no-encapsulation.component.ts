import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  templateUrl: './no-encapsulation.component.html',
  styleUrl: './no-encapsulation.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent {

}
