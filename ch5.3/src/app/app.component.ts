import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChRouteServiceService } from './ch-route-service.service';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View0Component } from './view0/view0.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { WebXPanelService } from '../services/webXPanel';
import { getWebXPanel, runsInContainerApp } from '@crestron/ch5-webxpanel';
const { isActive, WebXPanel, WebXPanelConfigParams, WebXPanelEvents } = getWebXPanel(!runsInContainerApp());

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, View1Component, View2Component, View0Component,MatSnackBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppComponent {
  title = 'ch5.3';
  constructor(public rout: ChRouteServiceService, 
    public webXPanelService: WebXPanelService) 
  {

  }

  activeflag: any;


  ngOnInit() 
 {
  Object.assign(WebXPanelConfigParams, this.webXPanelService.getWebXPanelConfiguration());
  console.log(`Initializing WebXPanel with config: ${JSON.stringify(WebXPanelConfigParams)}`, WebXPanelEvents);
  WebXPanel.initialize(WebXPanelConfigParams);
  WebXPanel.addEventListener(WebXPanelEvents.NOT_AUTHORIZED, ({ detail }) => {
    const redirectURL = detail.redirectTo;
    setTimeout(() => {
      console.log("redirecting to " + redirectURL);
      window.location.replace(redirectURL);
    }, 3000);
  });
  }

}


