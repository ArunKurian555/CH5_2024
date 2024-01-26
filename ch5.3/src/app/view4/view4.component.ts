import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ChRouteServiceService } from '../ch-route-service.service';
import { TimeDelayService } from '../time-delay.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { EditnameComponentComponent } from '../editname-component/editname-component.component';
import { RamptimeComponent } from '../ramptime/ramptime.component';
import { PasscodeComponent } from '../passcode/passcode.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

declare var CrComLib: any;

@Component({
  selector: 'app-view4',
  standalone: true,
  imports: [MatButtonModule,MatDialogModule,MatSlideToggleModule   ],
  templateUrl: './view4.component.html',
  styleUrl: './view4.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})



export class View4Component implements OnInit {

  constructor(public dialog: MatDialog, public rout: ChRouteServiceService, public tdelay: TimeDelayService) { }

  ngOnInit(): void {
    this.tdelay.active = 100000;

  }
  
  onClick(id: number) {
    let self = this;
    this.rout.active = id - 1;

  }



  editname() {
    const dialogRef = this.dialog.open(EditnameComponentComponent, {
      height: '80vh',
      width: '80vw',
    });
    CrComLib.publishEvent('b', "3069", true);
    CrComLib.publishEvent('b', "3069", false);
  }

  clicked2() {

    CrComLib.publishEvent('b', "3071", true);
    CrComLib.publishEvent('b', "3071", false);
  }


  ramptime() {
    const dialogRef = this.dialog.open(RamptimeComponent, {

    });
  }

  Scheduler() {
this.rout.active=4  }

  ZoneArea() {
  this.rout.active=1  }

    
  Passcode() {
    const dialogRef = this.dialog.open(PasscodeComponent, {

    });
  }
  onclick() {
    this.rout.active = 5;
  }

    LoadSelector() {
      this.rout.active = 7;
    }
  scenesave()
{
  this.rout.active = 2;

}
      public useDefault = false;

      public toggle(event: MatSlideToggleChange) {
          
         // this.useDefault = event.checked;
          if (event.checked==true) {
            this.tdelay.active = 10;
          } 
          else {
            this.tdelay.active = 100000;
            
          } 
          
      }
      public toggle1()
      {
        this.useDefault =!this.useDefault;
        if (this.useDefault==true) {
          this.tdelay.active = 10;

        } 
        else {
          this.tdelay.active = 100000;
          
        } 
      }
}