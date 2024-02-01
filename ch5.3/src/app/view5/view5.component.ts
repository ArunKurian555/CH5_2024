import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ChRouteServiceService } from '../ch-route-service.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterOutlet } from '@angular/router';

declare var CrComLib: any;

@Component({
  selector: 'app-view5',
  standalone: true,
  imports: [CommonModule , MatButtonModule, ScrollingModule,RouterOutlet],
  templateUrl: './view5.component.html',
  styleUrls: ['./view5.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class view5Component implements OnInit {
  dragPosition = { x: 0, y: 0 };
  positionarray = [];
  constructor(public rout: ChRouteServiceService, public dialog: MatDialog,private _snackBar: MatSnackBar) { }
  items = [1, 2, 3, 4, 5, 6];

  ngOnInit(): void {
  }



  clicked()

  {
    this.rout.active = 2;
  }
  clicked2(event) {
    
    this._snackBar.open("Saved", "OK", {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    CrComLib.publishEvent('b', "Zones.Save_Area", true);
    CrComLib.publishEvent('b', "Zones.Save_Area", false);
  }
}