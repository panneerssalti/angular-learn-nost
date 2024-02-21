import { Component } from '@angular/core';

@Component({
  selector: 'app-web-work',
  templateUrl: './web-work.component.html',
  styleUrl: './web-work.component.css'
})
export class WebWorkComponent {
  factorialResult!: number;
  factorialInput: number = 1;

  constructor() {
    this.calculateFactorial();
  }

  calculateFactorial() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('../web-worker.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.factorialResult = data;
      };
      worker.postMessage(this.factorialInput);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
