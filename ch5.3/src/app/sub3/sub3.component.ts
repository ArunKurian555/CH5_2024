import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ChRouteServiceService } from '../ch-route-service.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

declare var CrComLib: any;
@Component({
  selector: 'app-sub3',
  standalone: true,
  imports: [MatButtonModule,MatSnackBarModule,MatDialogModule, MatIconModule],
  templateUrl: './sub3.component.html',
  styleUrl: './sub3.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Sub3Component implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }

  tick() {

    CrComLib.publishEvent('b', "3070", true);
    CrComLib.publishEvent('b', "3070", false);
  }

}
