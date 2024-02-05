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




export const appConfig: ApplicationConfig = {
    providers: [ ChRouteServiceService,  importProvidersFrom(BrowserAnimationsModule),
      importProvidersFrom(MatDialogModule),
      TimeDelayService,
    provideRouter(routes), { provide: APP_BASE_HREF, useValue: './' }, { provide: APP_INITIALIZER, useFactory: webXPanelFactory, multi: true },
  ]
};

