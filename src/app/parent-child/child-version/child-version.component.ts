import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-version',
  templateUrl: './child-version.component.html',
  styleUrl: './child-version.component.css'
})
export class ChildVersionComponent implements OnChanges {
  @Input() minor: number = 0;
  @Input() major: number = 0;

  changeLog: string[] = [];

  @Output() event = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = [];

    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = changedProp.currentValue;
      if (changedProp.isFirstChange()) {
        log.push(`The initial value of the ${propName} is set to ${to}`);
      } else {
        const from = changedProp.previousValue;
        log.push(`value of the ${propName} is changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '))
  }

  emitEvent() {
    this.event.emit(true);
  }




}
