import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChRouteServiceService } from '../ch-route-service.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CdkDrag, CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TimeDelayService } from '../time-delay.service';
import { View3Component } from '../view3/view3.component';
import { RouterOutlet } from '@angular/router';


declare var CrComLib: any;


@Component({
  selector: 'app-view2',
  standalone: true,
  imports: [CommonModule , CdkDrag, MatDialogModule ,DragDropModule, MatButtonModule,RouterOutlet ],
  templateUrl: './view2.component.html',
  styleUrl: './view2.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})

export class View2Component implements OnInit {
  
  dragPosition = { x: 0, y: 0 };
  positionarray = [];
  constructor(public rout: ChRouteServiceService, public dialog: MatDialog, public tdelay:TimeDelayService ) { }
  items = [1, 2, 3, 4, 5, 6];
  
  ngOnInit(): void {
    setTimeout(async () => {
      const areasize = await CrComLib.getState('n', 'Area.Size', true);
      this.positionarray = [];
      this.items = [];
      for (let index = 0; index < areasize; index++) {
        this.positionarray.push(this.dragPosition);
        this.items.push(index);
      }

for (let i = 0; i < 51; i++) {
  const sigValuex = CrComLib.getState('s', `${300 + i}`, true);
  const sigValuey = CrComLib.getState('s', `${400 + i}`, true);

  this.positionarray[i+1] = {
    x: parseFloat(sigValuex),
    y: parseFloat(sigValuey)
  };
}

    }, 2000);


  }
  onclick() 
  {
    this.rout.active = 0;
  }
  controlpop(i) {
    CrComLib.publishEvent('b', "Area.AreaSelect" + i, true);
    CrComLib.publishEvent('b', "Area.AreaSelect" + i, false);
    const dialogRef = this.dialog.open(View3Component, {
    });
  }









  public onDragEnded(event: CdkDragEnd, a): void {
    this.positionarray[a+1] = event.source.getFreeDragPosition();
    let x = this.positionarray[a+1].x.toFixed(1);
    let y = this.positionarray[a+1].y.toFixed(1);
    let xc = 300 + a;
    let xa = xc.toString();
    let yc = 400 + a;
    let ya = yc.toString();
    CrComLib.publishEvent('s', xa, x);
    CrComLib.publishEvent('s', ya, y);
    setTimeout(() => {
      CrComLib.publishEvent('b', "3071", true);
      CrComLib.publishEvent('b', "3071", false);
    }, 1000);

    
    
  
  }


}
