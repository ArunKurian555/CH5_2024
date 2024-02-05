import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChRouteServiceService } from '../ch-route-service.service';
import { View1Component } from '../view1/view1.component';
import { View2Component } from '../view2/view2.component';
import { View05Component } from '../view0.5/view0.5.component';
import { View4Component } from '../view4/view4.component';
import { view5Component } from '../view5/view5.component';
import { View6Component } from '../view6/view6.component';
import { View7Component } from '../view7/view7.component';
declare var CrComLib: any;

@Component({
  selector: 'app-view0',
  standalone: true,
  imports: [CommonModule, RouterOutlet, View1Component, View2Component,View05Component,View4Component,view5Component,View6Component,View7Component],
  templateUrl: './view0.component.html',
  styleUrl: './view0.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class View0Component implements OnInit {

  constructor(public rout: ChRouteServiceService) { }

  activeflag: any;
  flag: number;
  ngOnInit(): void {

// // remove above after testing
//     const zoneSubKey = CrComLib.subscribeState('s', 'Zones.Zone0', (value) => {
//       if (value.length > 0) {
//         this.activeflag = 1;
//       }
//     });
setTimeout(async () => {
  
  this.rout.active=1;
  this.flag=1

}, 5000);

  }

  onClick()
  {
    if(this.activeflag==1)
    {    this.flag=1;}
    this.rout.active=1;
    
  }


}
