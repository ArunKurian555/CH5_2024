import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChRouteServiceService } from './ch-route-service.service';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View0Component } from './view0/view0.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, View1Component, View2Component, View0Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppComponent {
  title = 'ch5.3';
  constructor(public rout: ChRouteServiceService) 
  {

  }

  activeflag: any;


  ngOnInit() 
 {


  }

}


