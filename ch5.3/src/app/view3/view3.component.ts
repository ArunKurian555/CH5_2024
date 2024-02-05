import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Sub1Component } from '../sub1/sub1.component';
import { Sub2Component } from '../sub2/sub2.component';
import { Sub3Component } from '../sub3/sub3.component';
import { Sub4Component } from '../sub4/sub4.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterOutlet } from '@angular/router';



declare var CrComLib: any;

@Component({
  selector: 'app-view3',
  standalone: true,
  imports: [CommonModule , MatButtonModule, ScrollingModule,RouterOutlet],
  templateUrl: './view3.component.html',
  styleUrl: './view3.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class View3Component implements OnInit{
  
  constructor(public dialog: MatDialog) { }


  /////////////// Angular Slider
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + '%';
    }
    return value;
  }
  ////////////////////////init 
  dmxfb = [
  ];
  temp: number;
  value: string;
  numvalue: number;
  activeZones: number[];
  activeNONZUMZones: number[];
  DMXactive: number[];
  CCTactive: number[];
  step = 'null';

  htmlToAdd: string = '<div class = "dmxfb" style="  " >  </div>';
  htmlToAddCct: string = '<div class = "cctfb" style="  " >  </div>';
  activeZone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125];
  activezonelabel = [];
  ngOnInit(): void {
    let self = this; //this statement binds the object that you want to self;
    this.DMXactive = [];
    this.CCTactive = [];


    /////////////// Active Zones
    const subkey1 = CrComLib.subscribeState('s', '1', function (value) {
      self.value = value;
      let items = [];
      for (let i = 0; i < self.value.length; i++) {
        if (self.value[i] === "1") {
          items.push(i+1);
        }
      }
      self.activeZones = items;

    });


    
    const sig2SubKeyZUM = CrComLib.subscribeState('s', '296', function (value) {
      self.value = value;
      let items = [];
      for (let i = 0; i < self.value.length; i++) {
        if (self.value[i] === "1") {
          items.push(1);
        }
        if (self.value[i] === "0") {
          items.push(0);
        }
      }
      self.activeNONZUMZones = items;
    });
 
    ////////////////////////// Zone names
    
    for (let i = 0; i < 251; i++) {
      self.activezonelabel.push("NIL");
     }

     for (let i = 1; i <= 251; i++) {
      const zoneSubKey = CrComLib.subscribeState('s', `Zones.Zone${i - 1}`, function (value) {
        self.activezonelabel[i] = value;
      });
    }

    ////////////////// Active DMX Zones
    const sig2SubKey = CrComLib.subscribeState('s', '2', function (value) {
      self.value = value;
      let items = [];
      for (let i = 0; i < self.value.length; i++) {
        if (self.value[i] === "1") {
          items.push(1);
        }
        if (self.value[i] === "0") {
          items.push(0);
        }
      }
      self.DMXactive = items;
    });

        ////////////////// Active CCT Zones
        const sig2SubKeyCct = CrComLib.subscribeState('s', '501', function (value) {
          self.value = value;
          let items = [];
          for (let i = 0; i < self.value.length; i++) {
            if (self.value[i] === "1") {
              items.push(1);
            }
            if (self.value[i] === "0") {
              items.push(0);
            }
          }
          self.CCTactive = items;
        });
    








    //////// DMX FB array

    for (let i = 0; i < 250; i++) {
      self.dmxfb.push({
        'background-color': 'rgb(0,0,0);'
      })
    }

    for (let i = 3; i <= 252; i++) {
      const sigSubKey = CrComLib.subscribeState('s', i.toString(), function (value) {
          self.dmxfb[i - 3]['background-color'] = value;
      });
  }
    ////////timeout for refreshing CrCom subscribeState
    setInterval(function () { }, 1000);




  }




  ////////////DMX Mat dialog pop up

  DMXcall(id: number) {
    const dialogRef = this.dialog.open(Sub4Component, {
      width: '80vw',
      data: id,
    });
    let temp: number;
    id = id - 1;
    temp = id * 10 + 3;
    let temp2: string;
    temp2 = temp.toString();
    CrComLib.publishEvent('b', temp2, true);
    CrComLib.publishEvent('b', temp2, false);


  }


  /////////////// Area Mat dialog pop up


  Areapop() {
    const dialogRef = this.dialog.open(Sub1Component, {
    });
  }

  Scenepop() {
    const dialogRef = this.dialog.open(Sub2Component, {

    });
  }

  Scenesave() {
    const dialogRef = this.dialog.open(Sub3Component, {});
    
  }

  expand()
  {
    if (this.step!="step1") {
      this.step = "step1";
    }
    else{
      this.step ="null";
    }
  }






}
