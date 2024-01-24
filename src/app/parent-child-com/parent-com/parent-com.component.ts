import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-com',
  templateUrl: './parent-com.component.html',
  styleUrl: './parent-com.component.css'
})
export class ParentComComponent {

  childFeeder:string = 'this is an example feeder';

}
