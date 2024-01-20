import { Component } from '@angular/core';

@Component({
  selector: 'app-com-a',
  //template:'<h3>this is a template in the ts file</h3>',
  template:`<h3>this is a template in the ts file</h3>
  <p>this is panneer.Keep the noise down</p>`,
  //templateUrl: './com-a.component.html',
  // styleUrl: './com-a.component.css'
  styles:['h1 { font-weight: normal; color: blue }','p { font-weight: bold; color: green }']
})
export class ComAComponent {

}
