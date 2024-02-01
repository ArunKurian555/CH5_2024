import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ChRouteServiceService } from '../ch-route-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
declare var CrComLib: any;
@Component({
  selector: 'app-view7',
  standalone: true,
  imports: [CommonModule , MatButtonModule, ScrollingModule],
  templateUrl: './view7.component.html',
  styleUrl: './view7.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class View7Component implements OnInit {

  constructor(public rout: ChRouteServiceService, public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  activeZone: number[];
  ngOnInit(): void {
    let items = [];
      for (let i = 1; i < 251; i++) {
        
          items.push(i);
        
      }
      this.activeZone = items;

    
  }
  
  

  clicked()

  {
    this.rout.active = 2;
  }

}
