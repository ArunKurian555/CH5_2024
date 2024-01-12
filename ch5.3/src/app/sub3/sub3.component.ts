import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ChRouteServiceService } from '../ch-route-service.service';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sub3',
  standalone: true,
  imports: [],
  templateUrl: './sub3.component.html',
  styleUrl: './sub3.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Sub3Component implements OnInit{

  constructor(public rout: ChRouteServiceService, public dialog: MatDialog,private _snackBar: MatSnackBar) { }



  activeZone: number[];
  ngOnInit(): void {
    let items = [];
      for (let i = 1; i < 9; i++) {
        
          items.push(i);
        
      }
      this.activeZone = items;

    
  }
  
  clicked()

  {
    this.rout.active = 3;
  }

}
