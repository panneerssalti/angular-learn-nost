import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() hero!:Hero;
  @Input('master') masterName:string = '';

}

export type Hero = {name:string;superpower:string};
