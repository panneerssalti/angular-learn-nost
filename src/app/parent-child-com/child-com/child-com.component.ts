import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrl: './child-com.component.css'
})
export class ChildComComponent {
  @Input('feed') inputFeed = '';
}
