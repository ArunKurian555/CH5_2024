import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChRouteServiceService } from '../ch-route-service.service';
import { View1Component } from '../view1/view1.component';
import { View2Component } from '../view2/view2.component';
import { View05Component } from '../view0.5/view0.5.component';
declare var CrComLib: any;

@Component({
  selector: 'app-view0',
  standalone: true,
  imports: [CommonModule, RouterOutlet, View1Component, View2Component,View05Component],
  templateUrl: './view0.component.html',
  styleUrl: './view0.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class View0Component implements OnInit {

  constructor(public rout: ChRouteServiceService) { }

  activeflag: any;
  flag: number;
  ngOnInit(): void {
    // Assuming you want to set a property named 'active' on 'this.rout'
    this.rout.active = 0;
  
    const zoneSubKey = CrComLib.subscribeState('s', 'Zones.Zone0', (value) => {
      if (value.length > 0) {
        this.activeflag = 1;
      }
    });

  }

  onClick()
  {
    if(this.activeflag==1)
    this.flag=1;
  }


}
