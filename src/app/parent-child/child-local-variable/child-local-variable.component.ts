import { Component } from '@angular/core';

@Component({
  selector: 'app-child-local-variable',
  templateUrl: './child-local-variable.component.html',
  styleUrl: './child-local-variable.component.css'
})
export class ChildLocalVariableComponent {
message: number = 0;
sample: string = 'panneer'
}
