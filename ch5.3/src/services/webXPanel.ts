import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class WebXPanelService {
  config: any = {
    "host": window.location.hostname,
    "port": 49200,
    "roomId": "",
    "ipId": "0x03",
    "tokenSource": "",
    "tokenUrl": ""
  };

  /**
   * Get WebXPanel configuration present in project-config.json
   */
  public getWebXPanelConfiguration() {
    const projectConfig: any = {
      "config": {
        "controlSystem": {
          "ipId": "",
          "host": ""
        }
      }
    };

    const pcConfig: any = this.config;
    if (projectConfig.config && projectConfig.config.controlSystem) {
      pcConfig.host = projectConfig.config.controlSystem.host || this.config.host;
      pcConfig.port = projectConfig.config.controlSystem.port || this.config.port;
      pcConfig.roomId = projectConfig.config.controlSystem.roomId || this.config.roomId;
      pcConfig.ipId = projectConfig.config.controlSystem.ipId || this.config.ipId;
      pcConfig.tokenSource = projectConfig.config.controlSystem.tokenSource || this.config.tokenSource;
      pcConfig.tokenUrl = projectConfig.config.controlSystem.tokenUrl || this.config.tokenUrl;
    }

    const entries = this.paramsToObject();
    const urlConfig: any = pcConfig;
    // default host should be the IP address of the PC
    urlConfig.host = entries["host"] || pcConfig.host;
    urlConfig.port = entries["port"] || pcConfig.port;
    urlConfig.roomId = entries["roomid"] || pcConfig.roomId;
    urlConfig.ipId = entries["ipid"] || pcConfig.ipId;
    urlConfig.tokenSource = entries["tokensource"] || pcConfig.tokenSource;
    urlConfig.tokenUrl = entries["tokenurl"] || pcConfig.tokenUrl;
    urlConfig.authToken = entries["authtoken"];

    return urlConfig;
  }

  /**
   * Convert the URL search params from string to object
   * The key should be in lowercase.
   * @param {object} entries
   * @returns
   */
  paramsToObject() {
    const urlString = window.location.href;
    const urlParams = new URL(urlString);
    const params: any = new URLSearchParams(urlParams.search);
    const result = {}
    for (const [key, value] of params) {
      result[key.toLowerCase()] = value;
    }
    return result;
  }

  constructor() { }

}

//   "use strict";


//   var status;
//   var pcConfig = config;
//   var urlConfig = config;
//   var isDisplayHeader = false;
//   var isEmptyHeaderComponent = true;
//   var isDisplayInfo = false;
//   var connectParams = config;

//   /**
//    * Get WebXPanel configuration present in project-config.json
//    */
//   function getWebXPanelConfiguration(projectConfig) {
//     console.log(projectConfig);
//     if (projectConfig.config && projectConfig.config.controlSystem) {
//       pcConfig.host = projectConfig.config.controlSystem.host || config.host;
//       pcConfig.port = projectConfig.config.controlSystem.port || config.port;
//       pcConfig.roomId = projectConfig.config.controlSystem.roomId || config.roomId;
//       pcConfig.ipId = projectConfig.config.controlSystem.ipId || config.ipId;
//       pcConfig.tokenSource = projectConfig.config.controlSystem.tokenSource || config.tokenSource;
//       pcConfig.tokenUrl = projectConfig.config.controlSystem.tokenUrl || config.tokenUrl;
//     }
//   }

//   /**
//    * Convert the URL search params from string to object
//    * The key should be in lowercase.
//    * @param {object} entries
//    * @returns
//    */
//   function paramsToObject() {
//     const urlString = window.location.href;
//     const urlParams = new URL(urlString);
//     const params = new URLSearchParams(urlParams.search);
//     const result = {}
//     for (const [key, value] of params) {
//       result[key.toLowerCase()] = value;
//     }
//     return result;
//   }

//   /**
//    * Get the url params if defined.
//    */
//   function getWebXPanelUrlParams() {

//     const entries = paramsToObject();

//     // default host should be the IP address of the PC
//     urlConfig.host = entries["host"] || pcConfig.host;
//     urlConfig.port = entries["port"] || pcConfig.port;
//     urlConfig.roomId = entries["roomid"] || pcConfig.roomId;
//     urlConfig.ipId = entries["ipid"] || pcConfig.ipId;
//     urlConfig.tokenSource = entries["tokensource"] || pcConfig.tokenSource;
//     urlConfig.tokenUrl = entries["tokenurl"] || pcConfig.tokenUrl;
//   }

//   function updateInfoStatus() {

//   }
//   /**
//    * Set the listeners for WebXPanel
//    */
//   function setWebXPanelListeners() {
//     // A successful WebSocket connection has been established
//     WebXPanel.default.addEventListener(WebXPanel.WebXPanelEvents.CONNECT_WS, (event) => {
//       updateInfoStatus("app.webxpanel.status.CONNECT_WS");
//     });

//     WebXPanel.default.addEventListener(WebXPanel.WebXPanelEvents.DISCONNECT_CIP, (msg) => {
//       updateInfoStatus("app.webxpanel.status.DISCONNECT_CIP");
//     });

//     WebXPanel.default.addEventListener(WebXPanel.WebXPanelEvents.ERROR_WS, (msg) => {
//       updateInfoStatus("app.webxpanel.status.ERROR_WS");
//     });

//     WebXPanel.default.addEventListener(WebXPanel.WebXPanelEvents.AUTHENTICATION_FAILED, (msg) => {
//       updateInfoStatus("app.webxpanel.status.AUTHENTICATION_FAILED");
//     });

//     WebXPanel.default.addEventListener(WebXPanel.WebXPanelEvents.AUTHENTICATION_REQUIRED, (msg) => {
//       updateInfoStatus("app.webxpanel.status.AUTHENTICATION_REQUIRED");
//     });

//     WebXPanel.default.addEventListener(WebXPanel.WebXPanelEvents.FETCH_TOKEN_FAILED, (msg) => {

//       updateInfoStatus("app.webxpanel.status.FETCH_TOKEN_FAILED");

//     });

//     WebXPanel.default.addEventListener(WebXPanel.WebXPanelEvents.CONNECT_CIP, (msg) => {
//       updateInfoStatus("app.webxpanel.status.CONNECT_CIP");
//     });

//     // Authorization
//     WebXPanel.default.addEventListener(WebXPanel.WebXPanelEvents.NOT_AUTHORIZED, ({ detail }) => {
//       const redirectURL = detail.redirectTo;
//       updateInfoStatus("app.webxpanel.status.NOT_AUTHORIZED");

//       setTimeout(() => {
//         console.log("redirecting to " + redirectURL);
//         window.location.replace(redirectURL);
//       }, 3000);
//     });
//   }

//   /**
//    * Show WebXPanel connection status
//    */

//   /**
//    * Connect to the control system through websocket connection.
//    * Show the status in the header bar using CSS animation.
//    * @param {object} projectConfig
//    */
//   function connectWebXPanel(projectConfig) {
//     connectParams = config;
//     // Merge the configuration params, params of the URL takes precedence
//     getWebXPanelConfiguration(projectConfig);
//     getWebXPanelUrlParams();

//     // Assign the combined configuration
//     connectParams = urlConfig;
//     console.log("connectWebXPanel", connectParams);

//     WebXPanel.default.initialize(connectParams);

//     // WebXPanel listeners are called in the below method
//     setWebXPanelListeners();
//   }

//   /**
//    * Initialize WebXPanel
//    */
//   function connect(projectConfig) {
//     // Connect only in browser environment
//     if (typeof WebXPanel !== "undefined" && WebXPanel.isActive) {
//       connectWebXPanel(projectConfig);
//     } else {
//       return;
//     }
//   }

//   function getWebXPanel(isBrowser) {
//     const Panel = WebXPanel.getWebXPanel(isBrowser);
//     WebXPanel = { ...Panel, default: Panel.WebXPanel };
//   }

//   /**
//    * All public method and properties exporting here
//    */
//   return {
//     connect,
//     getWebXPanel,
//     paramsToObject
//   };

// })();
