import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-check',
  templateUrl: './directive-check.component.html',
  styleUrl: './directive-check.component.css'
})
export class DirectiveCheckComponent {
  booleanValue:boolean = true;
  stringArray:Array<string> = ['panneer','selvam','hari','prasad'];
  switchString:string = 'case5';
  highlightColor:string = 'pink';
  defaultColor:string = 'yellow';
}