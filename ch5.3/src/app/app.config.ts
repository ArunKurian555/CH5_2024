import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';


import { getWebXPanel, runsInContainerApp } from '@crestron/ch5-webxpanel';

const { isActive, WebXPanel, WebXPanelConfigParams, WebXPanelEvents } = getWebXPanel(!runsInContainerApp());



const webXPanelFactory = () => () => {

} 


if(isActive) {
    WebXPanelConfigParams.ipId = '0x03';
    console.log(`Initializing WebXPanel with config: ${JSON.stringify(WebXPanelConfigParams)}`);
    WebXPanel.initialize(WebXPanelConfigParams);
}


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: APP_BASE_HREF, useValue: './' }, { provide: APP_INITIALIZER, useFactory: webXPanelFactory, multi: true },]
};

