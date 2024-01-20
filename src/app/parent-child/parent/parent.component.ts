import { Component } from '@angular/core';
import { Hero } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  minor:number = 0;
  major:number = 0;
newMajor() {
this.major++;
this.minor=0;
}
newMinor() {
  this.minor++;
}

onEvent(value:boolean):void{
  console.log('event received from the child'+value);
}
  // heroes = HEROS;
  // master = 'Master';

}

const HEROS:Hero[]=[{name:'panneer',superpower:'logical thinker'},{name:'IronMan',superpower:'Billionaire'}]
