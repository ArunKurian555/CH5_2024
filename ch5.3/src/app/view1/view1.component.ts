import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ChRouteServiceService } from '../ch-route-service.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

declare var CrComLib: any;


@Component({
  selector: 'app-view1',
  standalone: true,
  imports: [ CommonModule,RouterOutlet],
  templateUrl: './view1.component.html',
  styleUrl: './view1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class View1Component implements OnInit  {

  constructor(public rout: ChRouteServiceService) { }
  

  ngOnInit(): void {

      
    const sig2SubKey = CrComLib.subscribeState('b', 'Pinpad.User', (value: any) => {
      if (value) {
        this.rout.active = 1;
      }
    });
  
    const sig3SubKey = CrComLib.subscribeState('b', 'Pinpad.Admin', (value: any) => {
      if (value) {
        this.rout.active = 2;
      }
    });



  }


  number = [1,2,3,4,5,6,7,8,9,0];

}
