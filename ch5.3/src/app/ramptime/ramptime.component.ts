import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ramptime',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './ramptime.component.html',
  styleUrl: './ramptime.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RamptimeComponent {

}
