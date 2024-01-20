import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-setter',
  templateUrl: './child-setter.component.html',
  styleUrl: './child-setter.component.css'
})
export class ChildSetterComponent {
 
  @Input() hero!:Hero;
  private _masterName: string = '';
  @Input('master')
  get masterName(): string { return this._masterName; }
  set masterName(masterName: string) {
    this._masterName = (masterName && masterName.trim()).concat(' just added') || '<no name set>';
  }

}

export type Hero = {name:string;superpower:string};