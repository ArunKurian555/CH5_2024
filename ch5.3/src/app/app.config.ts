import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { getWebXPanel, runsInContainerApp } from '@crestron/ch5-webxpanel';
import { ChRouteServiceService } from './ch-route-service.service';
const { isActive, WebXPanel, WebXPanelConfigParams, WebXPanelEvents } = getWebXPanel(!runsInContainerApp());
const webXPanelFactory = () => () => {

} 


if(isActive) {
    WebXPanelConfigParams.ipId = '0x03';
    WebXPanelConfigParams.tokenSource
    WebXPanelConfigParams.authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsIlNvdXJjZSI6IkNvbnRyb2wgU3lzdGVtIn0.eyJleHAiOjE3MDYyMTMxMjIsInVzZXJuYW1lIjoiT2ZmbGluZVRva2VuIiwiT3B0aW9uYWwiOiI3ODI3NDg3MTMifQ.PYchHCQ5W0NWVRCRLZfK_X-Qrxj2ssQ9LAqCiQ2N0mM';
    console.log(`Initializing WebXPanel with config: ${JSON.stringify(WebXPanelConfigParams)}`);
    WebXPanel.initialize(WebXPanelConfigParams);
}


export const appConfig: ApplicationConfig = {
    providers: [ ChRouteServiceService,
    provideRouter(routes), { provide: APP_BASE_HREF, useValue: './' }, { provide: APP_INITIALIZER, useFactory: webXPanelFactory, multi: true },
  ]
};

