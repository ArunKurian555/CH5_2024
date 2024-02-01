import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
declare var CrComLib: any;


@Component({
  selector: 'app-ramptime',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './ramptime.component.html',
  styleUrl: './ramptime.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RamptimeComponent {
  save() {

    CrComLib.publishEvent('b', "3069", true);
    CrComLib.publishEvent('b', "3069", false);
  }


}
