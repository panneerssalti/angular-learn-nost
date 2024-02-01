import { SubServiceService } from './../sub-service.service';
import { ServiceTwoService } from './../service-two.service';
import { ServiceOneService } from './../service-one.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-child',
  templateUrl: './service-child.component.html',
  styleUrl: './service-child.component.css',
  //providers:[{provide:ServiceOneService,useClass:ServiceTwoService}]
  //providers:[{provide:ServiceOneService,useExisting:ServiceTwoService}]
  // providers:[{provide:ServiceOneService,useFactory:()=>{
  //   const random = Math.round(Math.random()*10);
  //   console.log(random);
  //   return random%2 === 0?new ServiceTwoService():new ServiceOneService();
  // }}]
  providers:[{provide:ServiceOneService,useFactory:(subServiceService:SubServiceService)=>{
    const random = Math.round(Math.random()*10);
    console.log(random);
    return random%2 === 0?new ServiceTwoService(subServiceService):new ServiceOneService();
  },deps:[SubServiceService]}]



})
export class ServiceChildComponent implements OnInit {

  constructor(private serviceOneService:ServiceOneService, private serviceTwoService:ServiceTwoService){}
  ngOnInit(): void {
    console.log('In the ServiceChildComponent');
    console.log(`${this.serviceOneService.value}`+' '+`${this.serviceTwoService.value}`);
  }



}










