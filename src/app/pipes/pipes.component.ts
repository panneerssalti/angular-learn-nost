import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  variableOne:string = 'this is used to test pipes';
  variableArray:string[] = ['one','two','three','four'];
  variableDate:Date = new Date();
}
