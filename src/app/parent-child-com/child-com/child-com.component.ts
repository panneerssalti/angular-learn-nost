import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrl: './child-com.component.css'
})
export class ChildComComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  @Input('feed') inputFeed = '';
  @Output() outputEvent = new EventEmitter<string>();
  @Output() output = new EventEmitter<string>();

  emitEvent():void{
    let newDate:Date = new Date();
    let result: string = newDate.toLocaleString();
    this.outputEvent.emit(result);
  }

  emitEventSec():void{
    this.outputEvent.emit(this.generateRandomString(10));
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }

  @Input() customValue: string = '';

  // Output event
  @Output() customValueChange = new EventEmitter<string>();

  // Event handler for input changes
  onInput(event: any) {
    this.customValue = event.target.value;
    this.customValueChange.emit(this.customValue);
  }


}
