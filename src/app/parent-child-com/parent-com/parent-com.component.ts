import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-com',
  templateUrl: './parent-com.component.html',
  styleUrl: './parent-com.component.css'
})
export class ParentComComponent implements OnDestroy,OnInit {
  updateInterval: any;
  ngOnInit(): void {
    this.updateChildFeeder();
    this.updateInterval = setInterval(() => {
      this.updateChildFeeder();
    }, 10000);
  }
  ngOnDestroy(): void {
   clearInterval(this.updateInterval);
  }
  dateArray:string[] = [];
addDateString($event: string) {
  this.dateArray.push($event);
}

  childFeeder:string = 'this is an example feeder';

  updateChildFeeder():void{
    const now = new Date();
    this.childFeeder = now.toLocaleTimeString();
  }

  secondChildFeeder:string = "second feeder heelo";

  parentValue: string = this.generateRandomString(10);


  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
}
