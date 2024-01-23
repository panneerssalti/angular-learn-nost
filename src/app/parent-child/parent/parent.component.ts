import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Hero } from '../child/child.component';
import { ChildLocalVariableComponent } from '../child-local-variable/child-local-variable.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit{
  sample:string = '';
// updateMessage(message: number) {
//   setInterval(()=>{
//     message++;
//     console.log(message);
//   },1000);
// }

//   minor:number = 0;
//   major:number = 0;
// newMajor() {
// this.major++;
// this.minor=0;
// }
// newMinor() {
//   this.minor++;
// }

// onEvent(value:boolean):void{
//   console.log('event received from the child'+value);
// }
  // heroes = HEROS;
  // master = 'Master';

@ViewChild(ChildLocalVariableComponent)
private childLocalVariableComponent!: ChildLocalVariableComponent;

ngAfterViewInit(): void {
  this.sample = this.childLocalVariableComponent.sample;
}

updateView():void{
  this.sample = this.childLocalVariableComponent.sample;
}

}

const HEROS:Hero[]=[{name:'panneer',superpower:'logical thinker'},{name:'IronMan',superpower:'Billionaire'}]
