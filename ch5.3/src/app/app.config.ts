import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { getWebXPanel, runsInContainerApp } from '@crestron/ch5-webxpanel';
import { ChRouteServiceService } from './ch-route-service.service';
import { MatDialogModule } from '@angular/material/dialog';
import { TimeDelayService } from './time-delay.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const { isActive, WebXPanel, WebXPanelConfigParams, WebXPanelEvents } = getWebXPanel(!runsInContainerApp());
const webXPanelFactory = () => () => {

} 


if(isActive) {
    WebXPanelConfigParams.ipId = '0x03';
    WebXPanelConfigParams.tokenSource
    WebXPanelConfigParams.authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsIlNvdXJjZSI6IkNvbnRyb2wgU3lzdGVtIn0.eyJleHAiOjE3MDY3Mzg5MTcsInVzZXJuYW1lIjoiT2ZmbGluZVRva2VuIiwiT3B0aW9uYWwiOiIyMDgwMTU3OTI4In0.YhyBxDE6WRM_ERimiS2aqrVvlzQg7MvqBIaLQu2jnkA';
    console.log(`Initializing WebXPanel with config: ${JSON.stringify(WebXPanelConfigParams)}`);
    WebXPanel.initialize(WebXPanelConfigParams);
}


export const appConfig: ApplicationConfig = {
    providers: [ ChRouteServiceService,  importProvidersFrom(BrowserAnimationsModule),
      importProvidersFrom(MatDialogModule),
      TimeDelayService,
    provideRouter(routes), { provide: APP_BASE_HREF, useValue: './' }, { provide: APP_INITIALIZER, useFactory: webXPanelFactory, multi: true },
  ]
};

