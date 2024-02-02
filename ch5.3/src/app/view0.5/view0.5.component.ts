import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ChRouteServiceService } from '../ch-route-service.service';
import { MatDialog } from '@angular/material/dialog';
import { TimeDelayService } from '../time-delay.service';
import { CommonModule } from '@angular/common';



declare var CrComLib: any;

@Component({
  selector: 'app-view05',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view0.5.component.html',
  styleUrl: './view0.5.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class View05Component {

  dragPosition = { x: 0, y: 0 };
  positionarray = [];
  constructor(public rout: ChRouteServiceService, public dialog: MatDialog, public tdelay:TimeDelayService ) { }
  items = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13];

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

}
