import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrl: './child-com.component.css'
})
export class ChildComComponent {
  @Input('feed') inputFeed = '';
  @Output() outputEvent = new EventEmitter<string>();

  emitEvent():void{
    let newDate:Date = new Date();
    let result: string = newDate.toLocaleString();
    this.outputEvent.emit(result);
  }
}
