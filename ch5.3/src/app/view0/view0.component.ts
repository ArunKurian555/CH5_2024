import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChRouteServiceService } from '../ch-route-service.service';
import { View1Component } from '../view1/view1.component';
import { View2Component } from '../view2/view2.component';
@Component({
  selector: 'app-view0',
  standalone: true,
  imports: [CommonModule, RouterOutlet, View1Component, View2Component],
  templateUrl: './view0.component.html',
  styleUrl: './view0.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class View0Component implements OnInit {

  constructor(public rout: ChRouteServiceService) { }

  activeflag: any;

  ngOnInit(): void {
    
    this.rout.active = 1;
    

  }
}
