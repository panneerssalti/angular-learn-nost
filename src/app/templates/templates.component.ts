import { Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.css'
})
export class TemplatesComponent {
    currentCustomer = 'Maria';
    itemImageUrl = 'https://unsplash.com/photos/a-van-is-driving-down-a-wooded-road-p_gzT50D6iU'
    delete(){
      console.log('this is the');
    }
}
